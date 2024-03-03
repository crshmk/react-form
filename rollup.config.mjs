import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json' assert { type: 'json' }

const dependencies = [   
  ...Object.keys(pkg.peerDependencies),
  ...Object.keys(pkg.devDependencies)
]

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      }
    ],
    onwarn(warning, warn) {
      // silence "this" has been rewritten to "undefined" error
      if (warning.code === 'THIS_IS_UNDEFINED') return
      warn(warning)
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      terser()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [
      /\.(css|less|scss)$/,
      [...dependencies]
    ]
  }
]