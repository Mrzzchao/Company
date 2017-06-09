/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        home: [path.join(__dirname, '../src/home/main.js')],
        match: [path.join(__dirname, '../src/match/main.js')],
        bfyc: [path.join(__dirname, '../src/bfyc/main.js')],
        vendor: ['vue', 'vue-router', 'vuex', 'v-tap', 'vuex-router-sync', 'es6-promise', 'co', 'axios']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue'],
        modules: [path.resolve(__dirname, '../src'), 'node_modules']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
            filename: 'home/index.html',
            minify: {
                collapseWhitespace: true
            },
            template: path.join(__dirname, '../src/home/index.ejs'),
            chunks: ['manifest', 'vendor', 'home']
        }),
        new HtmlWebpackPlugin({
            filename: 'match/index.html',
            title: '赛事中心',
            template: path.join(__dirname, '../src/match/index.ejs'),
            chunks: ['manifest', 'vendor', 'match']
        }),
        new HtmlWebpackPlugin({
            filename: 'bfyc/index.html',
            title: '足球比分-500彩票网',
            template: path.join(__dirname, '../src/bfyc/index.ejs'),
            chunks: ['manifest', 'vendor', 'bfyc']
        })

       /* new CopyWebpackPlugin([
            {from: 'static', to: ''},
        ])*/
    ]
};
