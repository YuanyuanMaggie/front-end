var pkg = require('./package.json')
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: path.resolve(__dirname + "/app/index.js"),
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: __dirname + "/build",
        filename: "js/[name]-[chunkhash:8].js",
        publicPath: '/'
    },
    resolve:{
        extensions:['.js', '.jsx']
    },
    module: {
        loaders: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract({fallback:'style-loader', use:'css-loader!less-loader'}) },
        { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader?modules' },
        { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000&name=img/.[ext]' },
        { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=fonts/[name].[ext]'}
    ]
    },
    plugins: [
        new webpack.BannerPlugin("Copyright by maggie."),
        new webpack.LoaderOptionsPlugin({
            postcss: [
                require('autoprefixer')
            ],
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        
        new ExtractTextPlugin('/css/[name].[chunkhash:8].css'), 
        new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: '/js/[name].[chunkhash:8].js'
        }),
        new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
}