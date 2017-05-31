'use strict';
process.env.VUE_ENV = 'server';

const fs = require('fs');
const path = require('path');
const co = require('co');

const express = require('express');
const util = require('./build/util');
const app = express();

const logger = util.getLogger('dev');

const pathMeta = require('./path.config');

// let pathMeta = require('./path_test.json');
const urls = Object.keys(pathMeta);

const resolve = file => path.resolve(__dirname, file);
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer;

const LRU = require('lru-cache');

// setup the server renderer, depending on dev/prod environment
let renderer = {};
let hasRun = false;
require('./build/setup-dev-server')(app, bundles => {
    Object.keys(bundles).forEach(key => {
        renderer[key] = createRenderer(bundles[key]);
    });
    hasRun || refreshCache();
    hasRun = true;
});

function createRenderer(bundle) {
    return createBundleRenderer(bundle, {
        cache: LRU({
            max: 1000,
            maxAge: 1000 * 60 * 15
        })
    });
}

const allpath = {};
urls.forEach(url => {
    allpath[url] = true;
});

allpath[`/datachart/index.html`] = true;
util.deleteUnused(path.join(__dirname, '../static'), allpath, logger);
util.processHome();

function refreshCache() {
    let htmlCache = util.readAllFile(path.join(__dirname, '../static'));
    let processOnePage = function (url, isGlobal) {
        if (isGlobal) {
            return new Promise((resolve) => {
                var s = Date.now();
                util.fetchHtmlByUrl(url).then((htmlStr) => {
                    if (htmlCache[url] && htmlCache[url] === htmlStr) {
                        logger.info(`the '${url}' content has no update, no need regenerate, total spend time is ${Date.now() - s}ms`);
                        resolve(false);
                    } else {
                        htmlCache[url] = htmlStr;
                        let dir = path.join(__dirname, '../static', url.substr(0, url.lastIndexOf('/')));
                        let file = url.substr(url.lastIndexOf('/') + 1);
                        util.mkdirsSync(dir);
                        fs.writeFile(path.join(dir, file), htmlStr, 'utf-8', function (err) {
                            if (err) {
                                console.error(err);
                                resolve(false);
                                return;
                            }
                            logger.info(`the '${url}' ----> content has update, total spend time is ${Date.now() - s}ms`);
                                // console.log(`[${ct.getHours()}:${ct.getMinutes()}:${ct.getSeconds()}] the \u001b[31m'${url}' ----> content has update\u001b[39m,total spend time is ${Date.now() - s}ms`)
                            resolve(true);
                        });
                    }
                }
                ).catch((e) => {
                    console.error(e);
                    logger.error(e);
                    logger.error(`url:${url} generate error!!!!!!`);
                    resolve(false);
                });
            });
        } else {
            return new Promise((resolve) => {
                var s = Date.now();
                let entry = url.substr(1, url.indexOf('/', 2) - 1);
                util.fetchHtml(url, renderer[entry], pathMeta[url]).then((htmlStr) => {
                    if (htmlCache[url] && htmlCache[url] === htmlStr) {
                        logger.info(`the '${url}' content has no update, no need regenerate, total spend time is ${Date.now() - s}ms`);
                        resolve(false);
                    } else {
                        htmlCache[url] = htmlStr;
                        let dir = path.join(__dirname, '../static', url.substr(0, url.lastIndexOf('/')));
                        let file = url.substr(url.lastIndexOf('/') + 1);
                        util.mkdirsSync(dir);
                        fs.writeFile(path.join(dir, file), htmlStr, 'utf-8', function (err) {
                            if (err) {
                                console.error(err);
                                resolve(false);
                                return;
                            }
                            logger.info(`the '${url}' ----> content has update, total spend time is ${Date.now() - s}ms`);
                            // console.log(`[${ct.getHours()}:${ct.getMinutes()}:${ct.getSeconds()}] the \u001b[31m'${url}' ----> content has update\u001b[39m,total spend time is ${Date.now() - s}ms`)
                            resolve(true);
                        });
                    }
                }).catch((e) => {
                    console.error(e);
                    logger.error(e);
                    logger.error(`url:${url} generate error!!!!!!`);
                    resolve(false);
                });
            });
        }
    };

    co(function * () {
        while (true) {
            for (let i = 0; i < urls.length; i++) {
                yield processOnePage(urls[i], pathMeta[urls[i]].global_lottery);
            }

            logger.info(`after 180s continue...`);
            yield util.waitTime(3 * 60);
        }
    }).catch((e) => {
        logger.error('throw error' + e);
    });
}

app.use(require('./build/forwardServer'));
app.use(express.static(resolve('../static'), {
    maxAge: '180s'
}));

const port = process.env.PORT || 3003;
app.listen(port, () => {
    logger.info(`server started at localhost:${port}`);
});
