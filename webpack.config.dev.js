const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    debug: true,
        //Switch loaders to debug mode.
    entry: [
        //Entry point of our app, good place for hot realoading
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?reload=true',
                //This connects to the server to receive notifications when the bundle rebuilds and then updates your client bundle accordingly.
            'webpack/hot/only-dev-server',
                // "only" prevents reload on syntax errors
            'babel-polyfill',
            path.resolve(__dirname, 'src/index.js')
        ],
    devtool: 'inline-source-map',
        //Choose a developer tool to enhance debugging
        //It is only available on dev enviroment or when opening debugging tools dpending on option selected.
    noInfo: false,
        //Disable information messages except errors
    target: 'web',
        //Node, Web or Electron.
    output: {
        //Dev mode does not generate files.
        path: path.join(__dirname + '/dist'),
            //The output directory as an absolute path
        filename: 'bundle.js',
            //Name of the bundled file.
        publicPath: '',
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
                loader: 'babel-loader',
                    //Uses babel loader
            },
            {
                test: /\.less$/,
                    //loads LESS
                exclude: /(node_modules)/,
                loaders: [
                    'style',
                        //Sets style inside <head />
                    'css?modules&importLoaders=2&localIdentName=[path][name]__[local]--[hash:base64:5]',
                        //CSS Loader and OPTIONS
                        //modules: Enable/Disable CSS Modules.
                        //importLoaders: Number of loaders applied before CSS loader.
                        //localIdentName: name of the file when laoded.
                    'postcss-loader',
                        //PostCSS Loader previously specified with importLoaders ^
                    'less'
                        //LESS Loader
                ]
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
                loader: 'file-loader?name=[path][name].[ext]'
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
        //Add additional plugins to the compiler.
        new webpack.HotModuleReplacementPlugin(),
            //Accepts Webpack Hot Module Replacements
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ]
};

module.exports = config;

