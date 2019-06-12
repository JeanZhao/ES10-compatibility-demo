const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Set Up Project',
            templateContent: `
               <!DOCTYPE html>
               <head></head>
               <body>
               <div id='app'></div>
               </body>
               </html>`
        })
    ]
};