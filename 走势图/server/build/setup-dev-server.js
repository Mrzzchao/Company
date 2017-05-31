const path = require('path');
const webpack = require('webpack');
const MFS = require('memory-fs');
const clientConfig = require('./webpack.client.config');
const serverConfig = require('./webpack.server.config');

module.exports = function setupDevServer(app, onUpdate) {
    // setup on the fly compilation + hot-reload
    Object.keys(clientConfig.entry).forEach((key) => {
        clientConfig.entry[key] = ['webpack-hot-middleware/client', ...clientConfig.entry[key]];
    });

    clientConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin()
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

    // watch and update server renderer
    const serverCompiler = webpack(serverConfig);
    const mfs = new MFS();
    serverCompiler.outputFileSystem = mfs;
    serverCompiler.watch({}, (err, stats) => {
        if (err) throw err;
        stats = stats.toJson();
        stats.errors.forEach(err => console.error(err));
        let result = {};

        stats.assets.filter(item => item.emitted).forEach(item => {
            result[item.name.substr(0, item.name.lastIndexOf('/'))] = mfs.readFileSync(path.join(serverConfig.output.path, item.name), 'utf-8');
        });

        onUpdate(result);
    });
};
