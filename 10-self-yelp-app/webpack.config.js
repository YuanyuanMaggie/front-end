var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname + "/app/index.js"),
    output: {
        path:path.resolve(__dirname,"build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                exclude:/node_modules/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader:'style-loader!css-loader?modules'
            }, {
                test:/\.(png|gif|jpg|jpge|bmp)$/i,
                loader:'url-loader?limit=5000'
            }, {
                test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader:'url-loader?limit=5000'
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            postcss: [
                require('autoprefixer')
            ],
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(), 
        new OpenBrowserPlugin({
          url: 'http://localhost:8080'
        }),

        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],
    devServer: {
        proxy:{
            'api': {
                target: 'http://localhost: 3000',
                secure: false
            }
        },
        contentBase: "./public",
        historyApiFallback: true, // no redirect
        inline: true, // refresh in time
        hot: true // HotModuleReplacementPlugin
    }
}