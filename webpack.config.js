const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack'); // to access built-in plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
    entry: path.join(__dirname, "./examples/src/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    // devServer: {
    //     contentBase: './dist',
    //     port: 8080
    // },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.less$/,
                exclude: /node_modules\/(?!antd)/,
                use:[{
                        loader: "style-loader" // creates style nodes from JS strings
                    },{
                        loader: 'css-loader', 
                        // options: {
                        //     modules: {
                        //         localIdentName: "[local]_[hash:base64:5]",
                        //     }, 
                        // }
                    },{
                        loader: "less-loader", // compiles Less to CSS
                        options: {
                            lessOptions: {
                                "javascriptEnabled": true
                            }
                        }
                    }]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        /**
         * By default, this plugin will remove all files inside webpack's output.path directory, 
         * as well as all unused webpack assets after every successful rebuild.
         * https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
         */
        new CleanWebpackPlugin({ verbose: true }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./examples/src/index.html"),
            filename: "./index.html"
        })
    ]
}



// babel-plugin-react-css-modules
// postcss-less
// babel-plugin-postcss-css-modules