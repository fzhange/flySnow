import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";

/**
 * 
 *  ! rollup-plugin-postcss family bucket 😀
 *  ?postcss-preset-env
 *  PostCSS Preset Env lets you convert modern CSS into something most browsers can understand,
 *  determining the polyfills you need based on your targeted browsers or runtime environments.
 *  ?simplevars https://www.npmjs.com/package/postcss-simple-vars
 *  ?nested https://www.npmjs.com/package/postcss-nested
 *  处理less嵌套样式写法
 *  ?autoprefixer  https://www.npmjs.com/package/autoprefixer
 * 
 */
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import autoprefixer from "autoprefixer";


export default {
    input: [
        "./src/Button/index.js",
        // "./src/Alert/index.js",
    ],
    output: [{
        file: "./dist/index.js",
        format: "cjs",
        sourcemap:true,
    }],
    external: ["react"],
    plugins: [
        postcss({
            extract: true,
            inject:true,
            minimize:false, //Compressed code base on cssnano
            plugins:[
                autoprefixer(),
                nested(),
                simplevars(),
                postcssPresetEnv(),
            ],
            extensions: [ '.css', 'less' ],
        }),
        nodeResolve(),
        babel({ 
            exclude: '**/node_modules/**',
            babelHelpers:'runtime',
         }),
        commonjs(),
        json(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        // terser(),
    ]
}