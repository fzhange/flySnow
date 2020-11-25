/**
 * ? 乱七八糟的babel https://gera2ld.space/posts/babel-helpers-and-polyfills/#preset-env 
 * ? Babel 入门教程 http://www.ruanyifeng.com/blog/2016/01/babel.html
 * ? babel 6:loose mode https://2ality.com/2015/12/babel6-loose-mode.html
 */

/**
 * @babel/proposal-decorators  装饰器提案
 * @babel/proposal-object-rest-spread 解构提案
 * @babel/plugin-transform-modules-commonjs  trasnform esm to cjs
 */

const loose = true;

module.exports = {
    "presets": [
        [
            "@babel/preset-env",{
                loose,
                // useBuiltIns:'entry'
                // modules:false
            }
        ],
        "@babel/preset-react",
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 3
            }
        ],
        "@babel/plugin-proposal-class-properties"
    ]
 }