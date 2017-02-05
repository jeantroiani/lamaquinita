const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    debug: true,
        //Switch loaders to debug mode.
    entry: {
        //Entry point of our app, good place for hot realoading
        vendor: path.resolve(__dirname, 'src/vendor.js'),
        main: path.resolve(__dirname, 'src/index.js')
    },
    devtool: 'source-map',
        //Choose a developer tool to enhance debugging
        //It is only available on dev enviroment or when opening debugging tools dpending on option selected.
        //Source-map options is the recommended for production.
    noInfo: false,
        //Disable information messages except errors
    target: 'web',
        //Node, Web or Electron.
    output: {
        path: path.join(__dirname, '/dist'),
            //The output directory as an absolute path
        filename: '[name].[chunkhash].js',
            //Name of the bundled file generated by Webpack since we are using webpack's common chunck plugin.
        publicPath: '/',
            //Public URL address of the output files when referenced in a browser.
            //On development it does not affect as it not generates files but reads from memory.
    },
     module: {
         //filetypes we want to handle
        loaders: [
            {
                test: /\.js$/,
                    //loads JavaScript
                exclude: /(node_modules)/,
                    //Excludes node modules folder
                loader: 'babel',
                    //Uses babel loader
            },
            {
                test: /\.less$/,
                    //loads LESS
                exclude: /(node_modules)/,
                loader:
                    ExtractTextPlugin.extract(
                        //Extracts loaded modules.
                        ['css-loader?modules&importLoaders=2&localIdentName=[path][name]__[local]--[hash:base64:5]',
                            //CSS Loader and OPTIONS
                            //modules: Enable/Disable CSS Modules.
                            //importLoaders: Number of loaders applied before CSS loader.
                            //localIdentName: name of the file when loaded.
                        'postcss-loader',
                            //PostCSS Loader previously specified with importLoaders ^
                        'less-loader'
                            //LESS Loader
                        ]
                    )
            },
            {
                test: /\.svg/,
                    //loads png and jpg files
                loader: 'svg-url-loader'
                    //SVG URL loader
                    //converts them to base64
            },
            {
                test: /\.(png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    //loads png and jpg files
                exclude: /node_modules/,
                loader: 'file-loader?name=public/[name].[ext]'
                    //File Loader and OPTIONS
                    //name receive options to rename te file after parsed.
            },
            {
                test: /\.ttf$/,
                    //loads tff files
                exclude: /node_modules/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
            //removes React minified production build log.
        new ExtractTextPlugin('[name].[contenthash].css'),
            //Extracts loaded modules into separated files.
        new WebpackMd5hash(),
            //Hashes the file name when content changes.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttibutes: true,
                        keepClosingSlash: true,
                        minifyCSS: true,
                        minifyURLs: true,
                        minifyJS: true
                    },
            inject: true
        }),
            //Add additional plugins to the compiler.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
            // Extracts in different files each entry point.
        new webpack.optimize.UglifyJsPlugin(),
            // Minifier for JS files.
        new webpack.optimize.DedupePlugin(),
            // Removes duplicates of dependecies

    ]
};

module.exports = config;

