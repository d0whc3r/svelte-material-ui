// import '@babel/polyfill';
// import '@testing-library/jest-dom/extend-expect';
// import dotenv from 'dotenv';
// import { cleanup } from '@testing-library/svelte';
//
// dotenv.config({ path: './test.env' });
//
// beforeEach(cleanup);
require('@babel/polyfill');
require('@testing-library/jest-dom/extend-expect');
const dotenv = require('dotenv');
const { cleanup } = require('@testing-library/svelte');

dotenv.config({ path: './test.env' });

beforeEach(cleanup);
