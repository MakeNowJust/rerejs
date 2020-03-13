import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import dts from 'rollup-plugin-dts';

const main = {
  input: 'index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs'
    }
  ],
  external: ['util'],
  plugins: [
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript']
    }),
    commonjs(),
    resolve({ preferBuiltins: true })
  ]
};

const types = {
  input: 'out/index.d.ts',
  output: [
    {
      file: 'lib/index.d.ts',
      format: 'esm'
    }
  ],
  external: ['util'],
  plugins: [dts()]
};

export default [main, types];