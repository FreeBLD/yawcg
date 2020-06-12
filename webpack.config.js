const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = ({ mode }) => {
    return {
        mode,
        target: 'node',
        entry: path.join(__dirname, 'src', 'main.ts'),
        output: {
            filename: 'yaleg.js',
            path: path.resolve(__dirname, `dist/${mode === 'production' ? 'release' : 'debug'}`)
        },
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })

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
                    use: ['mocha-loader', 'ts-loader'],
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        node: {
            fs: 'empty',
            __dirname: false
        },
        devtool: mode === 'development' ? 'source-map' : 'none',
        watchOptions: {
            ignored: /node_modules/
        },
        optimization: {
            minimize: mode === 'production' ? true : false,
        }
    }
}