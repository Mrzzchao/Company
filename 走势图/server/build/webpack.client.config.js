const webpack = require('webpack');
const base = require('./webpack.base.config');
const config = Object.assign({}, base, {
    plugins: base.plugins.concat([
        // strip comments in Vue code
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        // extract vendor chunks for better caching
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'datachart/vendor/client-vendor-bundle.js'
        })
    ]),
    resolve: {
        extensions: ['.client.js', '.client.vue', '.js', '.vue']
    }
});
config.entry = Object.assign({}, base.entry, {vendor: ['vue', 'vue-router', 'vuex', 'lru-cache', 'es6-promise']});

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        // minify JS
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

module.exports = config;
