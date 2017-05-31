const path = require('path');

module.exports = {
    devtool: '#source-map',
    entry: {
        'datachart': ['./src/datachart/client-entry.js']
    },
    output: {
        path: path.resolve(__dirname, '../../static'),
        publicPath: '/',
        filename: '[name]/client-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }

        ]
    },
    plugins: [

    ]
};
