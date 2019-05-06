const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const build = path.resolve(__dirname, 'build');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    target: 'node',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: '[name].js',
        path: build,
        chunkFilename: '[name].[hash].bundle.js',
        library: ["herodotus", "[name]"],
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.md/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|svg|jpg|gif|xlsx|docx|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: (url, resourcePath, context) => path.relative(context, resourcePath).replace('src', '')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/assets'),
                to: path.resolve(__dirname, 'build/assets')
            }
        ])
    ]
};