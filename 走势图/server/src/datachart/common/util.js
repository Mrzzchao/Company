/**
 * Created by lichun on 2016/9/26.
 */

import LRU from 'lru-cache';
import fetchJsonp from 'fetch-jsonp';

import axios from 'axios';

const inBrowser = typeof window !== 'undefined';

const cache = inBrowser
    ? null
    : (process.__API_CACHE__ || (process.__API_CACHE__ = createCache()));

function createCache() {
    return LRU({
        max: 1000,
        maxAge: 1000 * 60  // 1 min cache
    });
}

export function fetchData(url, postResultFn) {
    if (!inBrowser) {
        let oriUrl = url.split('?')[0];
        if (cache.has(oriUrl)) {
            return Promise.resolve(cache.get(url));
        } else {
            return axios.get(`${url}?_t=${Date.now()}`, {
                responseType: 'text',
                timeout: 10000// 10s超时
            }).then((resp) => {
                /*eslint-disable */
                function datachart(data) {
                    postResultFn && postResultFn(data);
                    cache.set(oriUrl, JSON.parse(JSON.stringify(data)));
                    return data;
                }
                return eval(resp.data);
                /*eslint-enable */
            });
        }
    } else {
        return fetchJsonp(`${url}?_t=${Date.now()}`, {
            jsonpCallbackFunction: 'datachart'
        }).then(resp => resp.json()).then((data) => {
            postResultFn && postResultFn(data);
            return data;
        });
    }
}
export const platform = (() => {
    return 'all';
})();
/*eslint-disable */
export const raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame || ((cb) => setTimeout(cb, 16.7));
/*eslint-enable */