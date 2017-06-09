/**
 * Created by lichun on 2017/1/19.
 */
const express = require('express');
const path = require('path');
const forwardRequest = require('forward-request')

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');

const webpackConfig = require('./build/webpack.dev.config');

const app = express();
if (process.env.NODE_ENV === 'production') {
    const compression = require('compression');
    app.use(compression());
    app.use(express.static(path.join(__dirname, 'dist'), {
        maxAge: '1d'
    }));
} else {
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        hot: true,
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler, {
        log: () => {}
    }));
}

app.use((req, resp, next) => {
    if (req.originalUrl.indexOf('/ews') === 0){
        forwardRequest({
            req,
            resp,
            host: 'ews.500.com',
            ip: '192.168.50.202',
            path: req.originalUrl.replace('/ews', '')
        });
    } else {
        next();
    }
});

let port = 8088;
app.listen(port, function () {
    console.log(`Listening on port ${port}!`);
});
