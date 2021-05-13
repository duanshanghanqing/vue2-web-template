const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: path.join(__dirname, '..', 'src', 'main.js'),
    output: {
        path: path.join(__dirname, '..', 'static'),
        publicPath: '/',
        filename: 'js/bundle-[hash].js'
    },
    module: {
        rules: [

            {
                test: /\.vue$/,
                loader: 'vue-loader' 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'babel-loader'
                    }
                ],
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'src': resolve('src'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ]
};
