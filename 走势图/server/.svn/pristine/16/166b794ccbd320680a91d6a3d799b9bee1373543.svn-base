/**
 * Created by lichun on 2016/7/19.
 */
var forward = require('forward-request');

module.exports = function (req, res, next) {
    // 比分基础接口
    if (req.url.indexOf('/cache') === 0) {
        delete req.headers.referer;
        forward.http(req, res, 'm.500.com', 'm.500.com', '80', req.originalUrl);
        return;
    }

    next();
};
