/**
 * ? 乱七八糟的babel https://gera2ld.space/posts/babel-helpers-and-polyfills/#preset-env 
 * ? Babel 入门教程 http://www.ruanyifeng.com/blog/2016/01/babel.html
 * ? babel 6:loose mode https://2ality.com/2015/12/babel6-loose-mode.html
 */

/**
 * @babel/proposal-decorators  装饰器提案
 * @babel/proposal-object-rest-spread 解构提案
 * @babel/plugin-transform-modules-commonjs  trasnform esm to cjs
 * 
 * @babel/runtime   @babel/runtime is a library that contains Babel modular runtime helpers and a version of regenerator-runtime.
 * @babel/runtime-corejs2  @babel/runtime-corejs2 is a library that contain's Babel modular runtime helpers and a version of regenerator-runtime as well as core-js
 * 
 * @babel/polyfill This will emulate a full ES2015+ environment  https://babeljs.io/docs/en/babel-polyfill#docsNav
 */

const loose = true;

module.exports = {
    "presets": [
        [
            "@babel/preset-env",{
                loose,
                // useBuiltIns:'usage', // dynamic import polyfill;  Note, @babel/polyfill still needs to be installed.  https://babeljs.io/docs/en/babel-polyfill#docsNav
                // corejs:{ // This option only has an effect when used alongside useBuiltIns: usage or useBuiltIns: entry
                //     version: 3, proposals: true //By default, only polyfills for stable ECMAScript features are injected;if you want polyfill them,you have to use proposals:true property
                // }
                // modules:false
            }
        ],
        "@babel/preset-react",
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime", //this plugin will auto do polyfill 
            {
                "corejs": 3
            }
        ],
        "@babel/plugin-proposal-class-properties"
    ]
 }