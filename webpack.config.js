const path = require('path');

module.exports = ({ mode }) => {
    return {
        mode,
        entry: path.join(__dirname, 'src', 'index.ts'),
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, `dist/${mode === 'development' ? 'release' : 'debug'}`)
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
        devtool: mode === 'development' ? 'source-map' : 'none',
        watchOptions: {
            ignored: /node_modules/
        },
        optimization: {
            minimize: mode === 'production' ? true : false,
        }
    }
}