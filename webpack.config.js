const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const build = path.resolve(__dirname, 'build');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'index.js',
        path: build,
        chunkFilename: '[name].[hash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif|xlsx|docx|pdf|md)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[hash].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};