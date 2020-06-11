const path = require('path');

module.exports = ({ mode }) => {
    return {
        mode,
        target: 'node',
        entry: path.join(__dirname, 'src', 'main.ts'),
        output: {
            filename: 'yaleg.js',
            path: path.resolve(__dirname, `dist/${mode === 'production' ? 'release' : 'debug'}`)
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: ['ts-loader', 'shebang-loader'],
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