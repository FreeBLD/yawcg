class ConfigFilesTemplates {
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
}