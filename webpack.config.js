const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s(a|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'src/assets/[name].[ext]',
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        historyApiFallback: true,
        host: '0.0.0.0',
        compress: true,
        hot: 'only',
        port: 3000,
        devMiddleware: {
            publicPath: '/',
        },
    },
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};
