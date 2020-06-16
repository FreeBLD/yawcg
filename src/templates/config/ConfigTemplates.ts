export default class ConfigFilesTemplates {
    constructor() {}

    getDefaultTsConfigTemplate() {
        return `
            {
                "compilerOptions": {
                    "outDir": "./dist/",
                    "sourceMap": true,
                    "noImplicitAny": true,
                    "module": "CommonJS",
                    "target": "ES2015",
                    "allowJs": true,
                    "experimentalDecorators": true,
                    "moduleResolution": "Node"
                }
            }
        `;
    }

    getDefaultWebpackTemplate() {
        return `
            const HtmlWebpackPlugin = require('html-webpack-plugin');
            const CopyWebpackPlugin = require('copy-webpack-plugin');
            const { CleanWebpackPlugin } = require('clean-webpack-plugin');
            const path = require('path');
            
            module.exports = ({ mode }) => {
                return {
                    mode,
                    entry: path.join(__dirname, 'src', 'index.ts'),
                    output:  {
                        path: path.join(__dirname, "/dist"),
                        filename: "bundle.js"
                    }, 
                    plugins: [
                        new CleanWebpackPlugin(),
                        new HtmlWebpackPlugin({
                            entry: 'index.ts',
                            template: path.resolve(__dirname, 'src/', 'index.html')
                        }),
                        new CopyWebpackPlugin({
                            patterns: [
                                {
                                    context: 'node_modules/@webcomponents/webcomponentsjs',
                                    from: '**/*.js',
                                    to: 'webcomponents'
                                }
                            ]
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
                            test: /\.test\.js$/,
                            use: 'mocha-loader',
                            exclude: /node_modules/
                        },
                        {
                            test: /\.test\.ts$/,
                            use: 'mocha-loader',
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
                    devServer: {
                        contentBase: path.join(__dirname, '/dist'),
                        compress: true,
                        port: 9000,
                        inline: true,
                        hot: true //If this is false then liveReload implicitly true
                    }
                };
            };
        `;
    }

    getDefaultUnitTestingBuffersTemplate() {
        return [
            `
            var context = require.context('../src', true, /\.test\.ts$/);
            context.keys().forEach(context);
            module.exports = context;
            `,
            `
            const HtmlWebpackPlugin = require('html-webpack-plugin');
            const { CleanWebpackPlugin } = require('clean-webpack-plugin');
            const path = require('path');
            
            module.exports = ({ mode }) => {
                return {
                    mode,
                    entry: path.resolve(__dirname, '.', 'all.tests.js'),
                    output: {
                        path: path.join(__dirname, '/build'),
                        filename: '[name].bundle.js',
                    },
                    plugins: [
                        new CleanWebpackPlugin(),
                        new HtmlWebpackPlugin({
                            template: path.resolve(__dirname, '.', 'test.html')
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
                            test: /\.test\.js$/,
                            use: 'mocha-loader',
                            exclude: /node_modules/
                        },
                        {
                            test: /\.test\.ts$/,
                            use: [ 'mocha-loader', 'ts-loader' ],
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
                    devServer: {
                        contentBase: path.join(__dirname, '/build'),
                        compress: true,
                        port: 9010,
                        inline: true,
                        //hot: true //If this is false then liveReload implicitly true
                    },
                    optimization: {
                        minimize: mode === 'production' ? true : false,
                    }
                };
            };
            `,
            `
            <!DOCTYPE html>

            <html lang="en">
             
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Mocha Testing</title>
            </head>
             
            <body>
            </body>
            </html>
            `,
            `
            var webpackConf = require('./webpack-test.config');

            module.exports = function (config) {
                return config.set({
                    browsers: ['Chrome'],
                    frameworks: ['mocha'],
                    files: ['./index.ts'],
                    preprocessors: {
                        './index.ts': ['webpack']
                    },
                    plugins: [
                        'karma-chrome-launcher',
                        'karma-mocha',
                        'karma-webpack'
                    ],
                    webpack: webpackConf,
                    webpackMiddleware: {
                        noInfo: true
                    }
                })
            }
            `
        ];
    }
}