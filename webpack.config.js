var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require("path");

var isProd = process.env.NODE_ENV === 'production'; //true or false
var cssDev = ['style-loader','css-loader','sass-loader'];
var cssProd = ExtractTextPlugin.extract({
        fallback: 'style-loader', 
        use: ['css-loader', 'sass-loader'],
        publicPath: './'
    });

var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: './src/js/app.jsx',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/, 
                use: cssConfig
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: [
                    // 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=./',
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 7777,
        contentBase: path.resolve(__dirname, "dist"),
        compress: false,
        stats: "errors-only",
        hot: true,
        open: true,
        openPage: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'VC Pricing',
            // minify: {
            //     collapseWhitespace: true
            // },
            favicon: './src/images/favicon.ico',
            hash: true,
            template: './src/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        
    ],
    resolve: {
        modules: [
            path.resolve( __dirname, 'src', 'js'),
            'node_modules'
        ],
        alias: {
            root: path.resolve( __dirname, 'src', 'js' ),
            sass: path.resolve( __dirname, 'src', 'sass' ),
            images: path.resolve(__dirname,'src','images'),
            modules: path.resolve( __dirname, 'src', 'js', 'modules' ),
            components: path.resolve( __dirname, 'src', 'js', 'components' )
        },
        extensions: ['.js', '.jsx']
    }
}