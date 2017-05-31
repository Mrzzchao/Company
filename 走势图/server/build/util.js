var fs = require('fs');
let axios = require('axios');
const ejs = require('ejs');
const path = require('path');
const log4js = require('log4js');
log4js.configure({
    appenders: [
        {
            type: 'dateFile',
            filename: '/data/waplogs/html_ssr/datachart.log',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: false,
            category: 'prod',
            backups: 30
        },
        {
            type: 'console',
            category: 'dev'
        }
    ]
});
let fileList = [];
let deleteUnused = function (basedir, allFile, logger) {
    fileList = [];
    function walk(path) {
        var dirList = fs.readdirSync(path);
        dirList.forEach(function (item) {
            let tmp = path + '/' + item;
            if (fs.statSync(tmp).isDirectory()) {
                if (fs.readdirSync(tmp).length > 0) {
                    walk(tmp);
                } else {
                    logger.info('will delete dir:' + tmp);
                    fs.rmdirSync(tmp);
                }
            } else {
                fileList.push(path + '/' + item);
            }
        });
    }
    walk(basedir);

    function deleteEmptyDir(path) {
        var dirList = fs.readdirSync(path);
        dirList.forEach(function (item) {
            if (fs.statSync(path + '/' + item).isDirectory()) {
                if (fs.readdirSync(path + '/' + item).length > 0) {
                    deleteEmptyDir(path + '/' + item);
                } else {
                    fs.rmdirSync(path + '/' + item);
                }
            }
        });
    }

    for (let file of fileList.filter(file => /\.html$/.test(file))) {
        if (!allFile[file.replace(basedir, '')]) {
            logger.info('will delete file:' + file);
            fs.unlinkSync(file);
        }
    }
    deleteEmptyDir(basedir);
    // processHome();
};

function processHome() {
    fs.createReadStream(`${__dirname}/../home/index.html`).pipe(fs.createWriteStream(`${__dirname}/../../static/datachart/index.html`));
}

function readAllFile(basedir) {
    fileList = [];
    function walk(path) {
        var dirList = fs.readdirSync(path);
        dirList.forEach(function (item) {
            let tmp = path + '/' + item;
            if (fs.statSync(tmp).isDirectory()) {
                walk(tmp);
            } else {
                fileList.push(path + '/' + item);
            }
        });
    }
    walk(basedir);

    let retResult = {};
    for (let file of fileList) {
        retResult[file.replace(basedir, '')] = fs.readFileSync(file, 'utf-8');
    }
    return retResult;
}

let htmlStru = fs.readFileSync(`${__dirname}/../src/index.ejs`, 'utf-8');
/**
 * 依赖 renderer
 * @param url 需要获取的url路径
 * @param cb 生成html成功回调
 */

function fetchHtml(url, render, pathmeta) {
    return new Promise((resolve, reject) => {
        let finished = false;
        let timeout = setTimeout(() => {
            if (!finished) {
                reject(new Error(`超时。。。处理${url}超过15秒`));
                finished = true;
            }
        }, 15000);
        const context = {url: url};
        try {
            render.renderToString(context, function (error, content) {
                timeout && clearTimeout(timeout);
                if (finished) return; // 已经超时了
                if (error) {
                    reject(error);
                    finished = true;
                    return;
                }

                let htmlTpl = ejs.render(htmlStru, pathmeta).split('%%%%');
                // eslint-disable-next-line
                let htmlContent = [htmlTpl[0], content, (context.initialState && `<script>window.__INITIAL_STATE__=${JSON.stringify(context.initialState)}</script>` || ''), htmlTpl[1]].join('');
                resolve(htmlContent);
                timeout && clearTimeout(timeout);
                finished = true;
// eslint-disable-next-line
            });
        } catch (e) {
            timeout && clearTimeout(timeout);
            if (finished) return;// 已经超时了
            reject(e);
            finished = true;
        }
    });
}

function fetchHtmlByUrl(url) {
    return new Promise((resolve, reject) => {
        let finished = false;
        let timeout = setTimeout(() => {
            if (!finished) {
                reject(new Error(`超时。。。处理${url}超过15秒`));
                finished = true;
            }
        }, 15000);

        axios.get(url).then(resp => {
            if (finished) return; // 已经超时了
            timeout && clearTimeout(timeout);
            finished = true;
            resolve(resp.data);
        }).catch((e) => {
            timeout && clearTimeout(timeout);
            if (finished) return;// 已经超时了
            reject(e);
            finished = true;
        });
    });
}

const waitTime = function (seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
};

// 创建多层文件夹 同步
function mkdirsSync(dirpath, mode) {
    if (!fs.existsSync(dirpath)) {
        var pathtmp = path.sep === '/' ? path.sep : undefined;
        dirpath.split(path.sep).forEach(function (dirname) {
            if (pathtmp) {
                pathtmp = path.join(pathtmp, dirname);
            } else {
                pathtmp = dirname;
            }
            if (!fs.existsSync(pathtmp)) {
                if (!fs.mkdirSync(pathtmp, mode)) {
                    return false;
                }
            }
        });
    }
}

module.exports = {
    deleteUnused,
    readAllFile,
    fetchHtml,
    mkdirsSync,
    waitTime,
    processHome,
    fetchHtmlByUrl,
    getLogger: log4js.getLogger
};
