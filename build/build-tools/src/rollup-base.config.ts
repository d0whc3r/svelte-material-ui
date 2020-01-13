// @ts-ignore
// import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import builtinModules from 'builtin-modules';
import { OutputOptions, Plugin, RollupOptions } from 'rollup';
import alias from '@rollup/plugin-alias';
// import nodePolyfills from 'rollup-plugin-node-polyfills';
// import nodeGlobals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
// @ts-ignore
import { postcss as sveltePostcss, scss as svelteScss, typescript as svelteTs } from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss';
// import scss from 'rollup-plugin-scss';
// @ts-ignore
import svelte from 'rollup-plugin-svelte';
// @ts-ignore
import findNodeModules from 'find-node-modules';
import fs from 'fs';
import path from 'path';

let CHECKED_DEPS: string[] = [];

interface JSONObject {
  [pkg: string]: string;
}

export interface JSONPackage {
  name: string;
  main: string;
  module: string;
  iife?: string;
  umd?: string;
  dependencies?: JSONObject;
  devDependencies?: JSONObject;
  peerDependencies?: JSONObject;

  [key: string]: string | JSONObject | undefined;
}

export function parseName(name: string) {
  return name
    .replace('@', '')
    .replace('/', '-')
    .split('-')
    .map((x, i) => (i > 0 ? x[0].toUpperCase() + x.slice(1) : x))
    .join('');
}

export const extensions = ['.ts', '.js', '.mjs', '.svelte'];
export const resolveOptions = {
  mainFields: ['jsnext:main', 'es2017', 'es2015', 'module', 'main'],
  preferBuiltins: true,
  extensions,
  modulesOnly: true,
  browser: true,
  dedupe: (importee: string) => importee === 'svelte' || importee.startsWith('svelte/')
};

const jsonPluginConfig = {
  // exclude: 'node_modules/**',
  preferConst: true,
  indent: '  '
};

const isDev = process.env.NODE_ENV !== 'production';

export const babelConfig = {
  exclude: [/\/core-js\//, /\/node_modules\//],
  plugins: [
    [
      '@babel/plugin-transform-regenerator',
      {
        asyncGenerators: true,
        generators: true,
        async: true
      }
    ],
    ['@babel/plugin-syntax-import-meta']
  ],
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: '> 1%, IE 11, not dead'
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ],
  extensions
};
const preprocessOpts = [
  svelteScss({
    sourceMap: isDev
  }),
  sveltePostcss({
    map: isDev,
    plugins: [require('autoprefixer')]
  }),
  svelteTs({})
];
const svelteConfig = {
  dev: isDev,
  emitCss: true,
  extensions: ['.svelte'],
  preprocess: preprocessOpts
};

const postcssConfig = {
  extensions: ['.css', '.sass', '.scss'],
  // namedExports: true,
  extract: 'dist/bundle.css',
  minimize: true,
  use: [
    [
      'sass', {
      includePaths: [
        path.resolve(__dirname, '../../../', 'theme'),
        path.resolve(__dirname, './../../', 'node_modules'),
        path.resolve('node_modules')
      ]
    }]
  ]
};

const customResolver = nodeResolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss', '.svelte']
});

export const plugins: { [pluginName: string]: Plugin | any } = {
  alias: alias({
    customResolver
  }),
  svelte: svelte(svelteConfig),
  postcss: postcss(postcssConfig),
  // scss: scss({
  //   output: 'dist/bundle.css',
  //   includePaths: [
  //     path.resolve(__dirname, '../../../', 'theme'),
  //     path.resolve(__dirname, './../../', 'node_modules'),
  //     './node_modules'
  //   ]
  // }),
  json: json(jsonPluginConfig),
  nodeResolve: nodeResolve(resolveOptions),
  // nodeResolve: nodeResolve(resolveOptions),
  builtins: builtins(),
  // css: css({
  //   dest: 'dist/index.css',
  //   raw: false
  // }),
  typescript: typescript(),
  // typescript: typescript({
  // typescript: typescriptCompiler
  // useTsconfigDeclarationDir: false,
  // objectHashIgnoreUnknownHack: true
  // }),
  // babel: babel(babelConfig),
  commonjs: commonjs()
  // nodeGlobals: nodeGlobals(),
  // nodePolyfills: nodePolyfills()
};

function getContent(dir: string) {
  return JSON.parse(fs.readFileSync(dir, 'utf8'));
}

function getDependencies(pkg: JSONPackage) {
  return [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];
}

function getAllDependencies(dep: string) {
  let result: string[] = [];
  findNodeModules()
    .map((dir: string) => path.resolve(process.cwd(), dir))
    .forEach((dir: string) => {
      const depPkg = path.join(dir, dep, 'package.json');
      if (fs.existsSync(depPkg)) {
        const content = getContent(depPkg);
        const deps = getDependencies(content);
        deps.forEach((d) => {
          if (!CHECKED_DEPS.includes(d)) {
            CHECKED_DEPS = [...CHECKED_DEPS, d];
            result = [...result, ...getAllDependencies(d)];
          }
        });
        result = [...result, ...deps];
      }
    });
  return result;
}

function filterDependencies(pkg: JSONPackage, deps: string[]) {
  const { devDependencies } = pkg;
  let result = [...deps];
  if (devDependencies) {
    result = result.filter((d) => !Object.keys(devDependencies).includes(d));
  }
  return result.filter((dep, index, array) => array.indexOf(dep) === index);
}

export function getRecursiveDependencies(pkg: JSONPackage) {
  const deps = getDependencies(pkg);
  let result: string[] = [...deps];
  deps.forEach((dep) => {
    CHECKED_DEPS = [...CHECKED_DEPS, dep];
    result = [...result, ...getAllDependencies(dep)];
  });
  return filterDependencies(pkg, result);
}

export function rollupConfig(pkg: JSONPackage, options: RollupOptions) {
  const output: OutputOptions[] = [
    { file: pkg.main, format: 'cjs', sourcemap: false },
    { file: pkg.module, format: 'es', sourcemap: false }
  ];

  const baseBuild = {
    input: 'index.ts',
    output,
    treeshake: true,
    plugins: Object.values(plugins),
    external: [...getRecursiveDependencies(pkg), ...builtinModules]
  };

  return [
    {
      ...baseBuild,
      ...options
    }
  ];
}
