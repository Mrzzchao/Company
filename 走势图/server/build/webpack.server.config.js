const webpack = require('webpack');
const base = require('./webpack.base.config');
let entry = base.entry;
let serverEntry = {};
Object.keys(entry).forEach((key) => {
    serverEntry[key] = entry[key].map(chunk => chunk.replace('client-', 'server-'));
});

module.exports = Object.assign({}, base, {
    target: 'node',
    devtool: false,
    entry: serverEntry,
    output: Object.assign({}, base.output, {
        filename: '[name]/server-bundle.js',
        libraryTarget: 'commonjs2'
    }),
    externals: Object.keys(require('../package.json').dependencies),
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"server"'
        })
    ],
    resolve: {
        extensions: ['.server.js', '.server.vue', '.js', '.vue']
    }
});
