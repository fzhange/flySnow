/**
 * npx styleguidist server error 
 * Error: read ECONNRESET 
 *  at TCP.onStreamRead (internal/stream_base_commons.js:111:27)
 * https://github.com/webpack/webpack-dev-server/issues/1642  
 * **/
module.exports = {
    ignore: [
        '**/components/index.js'
    ],
    components: 'components/**/*.{js,jsx,ts,tsx}',
    webpackConfig: {
        module:{
            rules:[
                {
                    // Babel loader will use your project’s babel.config.js
                    test: /\.js?$/, 
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    //Other loaders that are needed for your components
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },{
                    test: /\.less$/,
                    exclude: /node_modules/, 
                    use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: 'css-loader', 
                        options: {
                            modules: {
                                localIdentName: "[local]_[hash:base64:5]",
                            }, 
                        }
                    }, {
                        loader: "less-loader", // compiles Less to CSS
                        options: {
                            lessOptions:{
                                "javascriptEnabled":true
                            }
                        }
                    }, 
                    ]
                }
            ]
        }  
    }
}