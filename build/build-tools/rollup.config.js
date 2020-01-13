import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import builtinModules from 'builtin-modules';
import builtins from 'rollup-plugin-node-builtins';
// import nodeGlobals from 'rollup-plugin-node-globals';
// import nodePolyfills from 'rollup-plugin-node-polyfills';
import pkg from './package.json';

export default function odpRollupConfig(options) {
  const extensions = ['.ts', '.js', '.mjs'];
  const resolveOptions = {
    mainFields: ['jsnext:main', 'es2017', 'es2015', 'module', 'main'],
    preferBuiltins: true,
    extensions,
    modulesOnly: true,
    browser: true,
  };
  const plugins = [
    json({
      exclude: 'node_modules/**',
      preferConst: true,
      indent: '  '
    }),
    nodeResolve(resolveOptions),
    builtins(),
    typescript(),
    commonjs(),
    // nodePolyfills(),
    // nodeGlobals(),
  ];

  return {
    input: 'src/index.ts',
    target: 'node',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: false, globals: {} },
      { file: pkg.module, format: 'es', sourcemap: false, globals: {} }],
    plugins,
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {}), ...builtinModules],
    ...options
  };
}
