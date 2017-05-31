/**
 * Created by lichun on 2016/8/3.
 */
// 加入es6 promise 和fetch的pollyfile支持

import {FBZS, HZZS, DXZS, ZhiHeZS, YLZS, ZDZS, JBZS, QYZS, JOZS, Q3ZS, FWZS, Q2ZS, Q1ZS, ZHZS} from './mutation-types';

import {fetchData} from '../common/util';

export function getJbzsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/jbzs_50.json`, function (data) {
        if (type === 'kl8') {
            data.data.forEach(item => {
                item.yilou = item.redfb.concat(item.specail_yilou);
                item.redfb = undefined;
                item.specail_yilou = undefined;
            });
        } else if (type === 'df6j1') {
            data.data.forEach(item => {
                item.redcode = item.redcode.split(',');
            });
        } else if (type === 'ssq') {
            let tjData = data.tj;
            for (var val in tjData) {
                if (tjData.hasOwnProperty(val)) {
                    let content = tjData[val];
                    for (var yilou in content) {
                        content[yilou] = content[yilou].split(',');
                        // console.log(yilou);
                    }
                }
            }
        } else if (type === 'dlt') {
            let tjData = data.tj;
            for (var key in tjData) {
                if (tjData.hasOwnProperty(key)) {
                    let content = tjData[key];
                    for (var idx in content) {
                        content[idx] = content[idx].split(',');
                    }
                }
            }
        } else if (type === 'plw') {
            data.data.forEach(item => {
                item.yilou1 = item.yilou1.split(',');
                item.yilou2 = item.yilou2.split(',');
                item.yilou3 = item.yilou3.split(',');
                item.yilou4 = item.yilou4.split(',');
                item.yilou5 = item.yilou5.split(',');
            // item.redcode = item.redcode.split(',');
            });
        } else if (type === 'qxc') {
            data.data.forEach(item => {
                item.yilou1 = item.yilou1.split(',');
                item.yilou2 = item.yilou2.split(',');
                item.yilou3 = item.yilou3.split(',');
                item.yilou4 = item.yilou4.split(',');
                item.yilou5 = item.yilou5.split(',');
                item.yilou6 = item.yilou6.split(',');
                item.yilou7 = item.yilou7.split(',');
                // item.redcode = item.redcode.split(',');
            });
        }
    }).then((data) => {
        if (type === 'kl8') {
            commit(JBZS, data);
        } else {
            commit(JBZS, data);
            // console.log(data);
        }
    });
}

export function getQ1zsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/qyfb_0.json`, function (data) {
        data.forEach((item) => {
            item.yilou = item.yilou.split(',');
            item.opencode = item.opencode.split(',');
        });
    }).then((data) => {
        commit(QYZS, data);
    });
}

export function getJozsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/jozs_50.json`, function (data) {
        if (type === 'sd') {
            data.data.forEach((item) => {
                item.yilou = item.joxtyilou;
            });
        }
    }).then((data) => {
        commit(JOZS, data);
    });
}

export function getZhiHezsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/zhzs_50.json`, function (data) {
        if (type === 'dlt') {
            data.data.forEach((item) => {
                for (var idx = 1; idx < 6; idx++) {
                    item['redzh' + idx] = item['redzh' + idx].split(',');
                }
            });
        } else if (type === 'ssq') {
            data.data.forEach((item) => {
                for (var idx = 1; idx < 7; idx++) {
                    item['redzh' + idx] = item['redzh' + idx].split(',');
                }
            });
        } else if (type === 'sd') {
            data.data.forEach((item) => {
                item.yilou = item.zhxtyilou.split(',');
            });
        }
    }).then((data) => {
        commit(ZhiHeZS, data);
    });
}
export function getHc1JbzsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/hm_50.json`, function (data) {
    }).then((data) => {
        commit(JBZS, data);
    });
}

export function getKlpkData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/klpk3/zoushi/rxzs_0.json`, function (data) {
        data.data.forEach((item) => {
            item.opencode = item.opencode.split(',');
            let codes = item.code.split('|')[0].split(',');
            let summary = {};
            codes.forEach(code => {
                code = parseInt(code);
                if (summary[code]) {
                    summary[code]++;
                } else {
                    summary[code] = 1;
                }
            });
            item.summary = summary;
        });
    }).then((data) => {
        commit(JBZS, data);
    });
}

export function getHc1SxzsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/sx_50.json`, function (data) {
    }).then((data) => {
        commit(DXZS, data);
    });
}

export function getXyscQ1Data({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/qysx_1.json`, function (data) {
        data.data.forEach(item => {
            item.yilou = item.yilou.split(',');
            item.opencode = item.opencode.split(',');
        });
    }).then((data) => {
        commit(Q1ZS, data);
    });
}
export function getHc1FwzsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/jj_50.json`, function (data) {
        data.data.forEach((item) => {
            switch (item.fwzs.indexOf('0')) {
                case 0: item.openfw = '东'; break;
                case 1: item.openfw = '南'; break;
                case 2: item.openfw = '西'; break;
                case 3: item.openfw = '北'; break;
            }
        });
    }).then((data) => {
        commit(FWZS, data);
    });
}

export function getXyscQ2Data({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/qesx_1.json`, function (data) {
        data.data.forEach(item => {
            item.opencode = item.opencode.split(',');
        });
    }).then((data) => {
        commit(Q2ZS, data);
    });
}

export function getXyscQ3Data({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/qssx_1.json`, function (data) {
        data.data.forEach(item => {
            item.opencode = item.opencode.split(',');
        });
    }).then((data) => {
        commit(Q3ZS, data);
    });
}

/**
 * 幸运赛车 综合走势
 * @param commit
 * @param type
 * @returns {Promise<R2|R1>|*|Thenable<U>|Promise.<TResult>|Promise<U>|Promise<R>}
 */
export function getXyscZhData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/zhsx_1.json`, function (data) {
        data.data.forEach(item => {
            item.opencode = item.opencode.split(',');
            item.yilou = item.yilou.split(',');
        });
    }).then((data) => {
        commit(ZHZS, data);
    });
}

export function getSfcZfbData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/zhfb.json`, function (data) {
        const tmpArr = new Array(15);
        data.forEach(item => {
            let bw = tmpArr.slice();
            bw[item.win - 0] = '0';
            let sw = tmpArr.slice();
            sw[item.draw - 0] = '0';
            let gw = tmpArr.slice();
            gw[item.lost - 0] = '0';
            item.yilou = [].concat(bw).concat(sw).concat(gw);
        });
    }).then((data) => {
        commit(JBZS, {data});
    });
}

export function getSfcSgtjData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/sgtj.json`, function (data) {
        const tmpArr = new Array(15);
        data.forEach(item => {
            let bw = tmpArr.slice();
            bw[item.win_draw - 0] = '0';
            let sw = tmpArr.slice();
            sw[item.win_lost - 0] = '0';
            let gw = tmpArr.slice();
            gw[item.draw_lost - 0] = '0';
            item.yilou = [].concat(bw).concat(sw).concat(gw);
        });
    }).then((data) => {
        commit(DXZS, {data});
    });
}

export function getFbzsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/fbzs_0.json`, function (data) {
        data.forEach((item) => {
            item.yilou = item.yilou.split(',');
            item.jsyilou = item.jsyilou.split(',');
            item.zsyilou = item.zsyilou.split(',');
            item.xsyilou = item.xsyilou.split(',');
            item.opencode = item.opencode.split(',');
        });
    }).then((data) => {
        commit(FBZS, data);
    });
}

export function getSSCFbzsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/wxjbzs_0.json`, function (data) {
        data.forEach((item) => {
            item.ww = item.ww.split(',');
            item.qw = item.qw.split(',');
            item.bw = item.bw.split(',');
            item.sw = item.sw.split(',');
            item.gw = item.gw.split(',');
            // item.groupjb = zxjbfx(item.opencode);
        });
    }).then((data) => {
        commit(FBZS, data);
    });
}

export function getSdJbzsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/jbzs_50.json`, function (data) {
        data.data.forEach(item => {
            // console.log(item.yilou2);
            item.yilou1 = item.yilou1.split(',');
            item.yilou2 = item.yilou2.split(',');
            item.yilou3 = item.yilou3.split(',');
            item.yilou = item.yilou.split(',');
            let num = {};
            item.opencode.forEach(code => {
                code = parseInt(code);
                if (num[code]) {
                    num[code]++;
                } else {
                    num[code] = 1;
                }
            });
            item.num = num;
        });
        if (type === 'sd') {
            let tjData = data.tj;
            for (var val in tjData) {
                if (tjData.hasOwnProperty(val)) {
                    let content = tjData[val];
                    for (var yilou in content) {
                        content[yilou] = content[yilou].split(',');
                    }
                }
            }
        }
    }).then((data) => {
        commit(JBZS, data);
    });
}

export function getHzzsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/hzfb_0.json`, function (data) {
        const sum = (opencode) => {
            return opencode.split(',').reduce((sum, item) => sum + (item << 0), 0);
        };
        data.forEach((item) => {
            item.hzyilou = item.hzyilou.split(',');
            item.sum = sum(item.opencode);
        });
    }).then((data) => {
        commit(HZZS, data);
    });
}

export function getSSCHzzsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/wzhzkd_0.json`, function (data) {
        data.forEach((item) => {
            item.hzzs = item.hzzs.split(',');
        });
    }).then((data) => {
        commit(HZZS, data);
    });
}

export function getDxzsData({commit}, type) {
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/dxzs_50.json`, function (data) {
        if (type === 'sd') {
            data.data.forEach((item) => {
                item.yilou = item.dxxtyilou;
            });
        }
    }).then((data) => {
        commit(DXZS, data);
    });
}

export function getYlzsData({commit}, type) { // ssq 遗漏、冷热走势
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/wzyl_50.json`).then((data) => {
        commit(YLZS, data);
    });
}
export function getZdzsData({commit}, type) { // ssq 遗漏、冷热走势
    return fetchData(`http://m.500.com/static/info/${type}/zoushi/blue_50.json`, function (data) {
        data.data.forEach((item) => {
            item.zd = item.zd.split(',');
            item.xhzd = item.xhzd.split(',');
        });
    }).then((data) => {
        commit(ZDZS, data);
    });
}