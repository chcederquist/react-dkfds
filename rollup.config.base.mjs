import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel'

export default {
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: /node_modules/,
      presets: [
        "@babel/preset-react", 
        "@babel/preset-typescript"]
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      outputToFilesystem: true
    }),
    postcss(),
    json()
  ]
}