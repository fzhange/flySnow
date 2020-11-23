const {nodeResolve} = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const {babel} = require('@rollup/plugin-babel');
const replace = require('@rollup/plugin-replace');
const path = require('path');


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
 *  postcss-modules  A PostCSS plugin to use CSS Modules everywhere. Not only at the client side.
 *  ?postcss-modules  https://www.npmjs.com/package/postcss-modules
 */
// const postcss = require('rollup-plugin-postcss');
const postcss = require('rollup-plugin-postcss-modules').default; //support css-modules 
const postcssPresetEnv = require('postcss-preset-env');
const simplevars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const modules = require('postcss-modules');


const cjsOutPath =  path.join(__dirname,"../lib");
const esOutPath =  path.join(__dirname,"../es");
const umdOutPath = path.join(__dirname,"../dist");


const plugins = [
    postcss({
        // extract: true,
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
const external = ["react"];
const outputArr = [{
    file: cjsOutPath,
    format: "cjs",
    sourcemap:true,
    exports:"default",
}]



module.exports = {
    plugins,external,outputArr
}