// This is a webpack style config file for unit testing using mocha
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
 
const buildPath = path.join(__dirname, '/build');

module.exports = ({ mode }) => {
    return {
        mode,
        target: 'node',
        externals: [nodeExternals()],
        entry: path.resolve(__dirname, '.', 'tests.js'),
        output: {
            path: buildPath,
            filename: 'tests.bundle.js',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new WebpackShellPlugin({
                onBuildExit: `npx mocha --colors ${buildPath}/tests.bundle.js`
            })
        ],
        module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.test\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            { 
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        devtool: mode === 'development' ? 'source-map' : 'none',
        watchOptions: {
            ignored: /node_modules/
        },
        node: {
            fs: 'empty',
            __dirname: false
        },
        devServer: {
            contentBase: buildPath,
            compress: true,
            port: 9010,
            inline: true,
            //hot: true //If this is false then liveReload implicitly true
        },
        optimization: {
            minimize: mode === 'production' ? true : false,
            splitChunks: {
                chunks: 'all'
            }
        }
    };
};