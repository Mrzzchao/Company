'use strict';
process.env.VUE_ENV = 'server';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express');
const app = express();

const clientConfig = require('./build/webpack.client.config');

Object.keys(clientConfig.entry).forEach((key) => {
    clientConfig.entry[key] = ['webpack-hot-middleware/client', ...clientConfig.entry[key]];
});

clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);
clientConfig.plugins.push(
    new HtmlWebpackPlugin({
        filename: 'datachart/index.html',
        minify: {
            // collapseWhitespace: true,
        },
        template: path.join(__dirname, './src/not-ssr_tpl.ejs')
    })
);
const clientCompiler = webpack(clientConfig);
app.use(require('webpack-dev-middleware')(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
}));
app.use(require('webpack-hot-middleware')(clientCompiler));

app.use(require('./build/forwardServer'));

app.use(function(req, res) {
    res.write(clientCompiler.outputFileSystem.readFileSync(path.join(clientConfig.output.path, 'datachart/index.html'), 'utf-8'));
    res.end();
});

/* app.use(express.static(path.resolve('../static'), {
    maxAge: '180s'
})); */

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
