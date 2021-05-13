const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackdevconfig = require('./webpack.dev.config');
module.exports = merge(webpackdevconfig, {
    devServer: {
        port: 9003,
        contentBase: './static',
        hot: true,
        historyApiFallback: true,
        open: true,
        proxy: {
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
