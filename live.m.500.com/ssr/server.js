'use strict';
process.env.VUE_ENV = 'server';

const fs = require('fs');
const path = require('path');

const co = require('co');

const util = require('./util');

const logger = util.getLogger(path.sep === '/' ? 'prod' : 'dev');

// const pathMeta = require('./path.json');

const pathMeta = require('./path.config');
// let pathMeta = require('./path_test.json')
const urls = Object.keys(pathMeta);

const createBundleRenderer = require('vue-server-renderer').createBundleRenderer;

const base = require('./build/webpack.base.config');
const LRU = require('lru-cache');

// setup the server renderer, depending on dev/prod environment
let renderer = {};
// create server renderer from real fs
Object.keys(base.entry).forEach(key => {
    const bundlePath = path.resolve(__dirname, `../dist/${key}/server-bundle.js`);
    renderer[key] = createRenderer(fs.readFileSync(bundlePath, 'utf-8'));
});

function createRenderer(bundle) {
    return createBundleRenderer(bundle, {
        cache: LRU({
            max: 1000,
            maxAge: 1000 * 60 * 15
        })
    });
}

/**
 * 清理垃圾文件
 */
const allpath = {};
urls.forEach(url => {
    allpath[url] = true;
});

allpath[`/datachart/index.html`] = true;

/**
 * 生成静态页面
 */
function refreshCache() {
    let htmlCache = util.readAllFile(path.join(__dirname, '../static'));
    let processOnePage = function (url) {
        return new Promise((resolve) => {
            var s = Date.now();
            let entry = url.substr(1, url.indexOf('/', 2) - 1);
            util.fetchHtml(url, renderer[entry], pathMeta[url]).then((htmlStr) => {
                if (htmlCache[url] && htmlCache[url] === htmlStr) {
                    // let ct = new Date()
                    logger.info(`the '${url}' content has no update, no need regenerate, total spend time is ${Date.now() - s}ms`);
                    // console.log(`[${ct.getHours()}:${ct.getMinutes()}:${ct.getSeconds()}] the '${url}' content has no update，no need regenerate,total spend time is ${Date.now() - s}ms`)
                    resolve(false);
                } else {
                    htmlCache[url] = htmlStr;
                    let dir = path.join(__dirname, '../static', url.substr(0, url.lastIndexOf('/')));
                    let file = url.substr(url.lastIndexOf('/') + 1);
                    util.mkdirsSync(dir);
                    fs.writeFile(path.join(dir, file), htmlStr, 'utf-8', function (err) {
                        if (err) {
                            logger.error(err);
                            resolve(false);
                            return;
                        }
                        logger.info(`the '${url}' ----> content has update, total spend time is ${Date.now() - s}ms`);
                        // console.log(`[${ct.getHours()}:${ct.getMinutes()}:${ct.getSeconds()}] the \u001b[31m'${url}' ----> content has update\u001b[39m,total spend time is ${Date.now() - s}ms`)
                        resolve(true);
                    });
                }
            }).catch((e) => {
                logger.error(e);
                logger.error(`url:${url} generate error!!!!!!`);
                resolve(false);
            });
        });
    };
    co(function * () {
        while (true) {
            for (let i = 0; i < urls.length; i++) {
                yield processOnePage(urls[i]);
            }
            logger.info(`after 180s continue...`);
            yield util.waitTime(3 * 60);
        }
    }).catch((e) => {
        logger.error('throw error' + e);
    });
}

/**
 * 启动服务
 */
setImmediate(refreshCache);