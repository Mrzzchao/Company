/**
 * Created by lichun on 2017/3/31.
 */
/**
 *wiki: http://wiki.boss.com/wiki/index.php/TOUCH_%E6%AF%94%E5%88%86%E6%8E%A5%E5%8F%A3
 */

import {
    AWESOME_PREDICT,
    AWESOME_PREDICT_EXPECT,
    COLDHOT_DISTRIBUTE,
    COMBAT_FEATURE,
    STRENGTH_COMPARE
} from './mutation_types';
import Vue from 'vue';
import axios from 'axios';

import VueResource from 'vue-resource';
Vue.use(VueResource);

let ewsDomain = '/ews';
if (process.env.NODE_ENV === 'production') {
    ewsDomain = 'http://ews.500.com';
}

export function fetchAwesomePredict({commit}, expect) {
    return axios.get(`${ewsDomain}/library/aggregate/awesome_predict?expect=${expect || ''}`).then((resp) => {
        if (resp.status === 200) {
            if (resp.data.status === '100') {
                return resp.data.data;
            } else {
                throw new Error(resp.data.message);
            }
        } else { // http 请求错误
            throw new Error(resp.message);
        }
    }).then((data) => {
        if (expect) { // 拥有expect 代表是昨天， 或者明天
            commit(AWESOME_PREDICT_EXPECT, data);
        } else {
            commit(AWESOME_PREDICT, data);
        }
    });
}

export function fetchColdHotDistribute({commit}) {
    return axios.get(`${ewsDomain}/library/aggregate/coldhot_distribute`).then((resp) => {
        if (resp.status === 200) {
            if (resp.data.status === '100') {
                return resp.data.data;
            } else {
                throw new Error(resp.data.message);
            }
        } else { // http 请求错误
            throw new Error(resp.message);
        }
    }).then((data) => {
        commit(COLDHOT_DISTRIBUTE, data);
        return data;
    });
}

export function fetchCombatFeature({commit}) {
    return axios.get(`${ewsDomain}/library/aggregate/combat_feature`).then((resp) => {
        if (resp.status === 200) {
            if (resp.data.status === '100') {
                return resp.data.data;
                // return ({
                //         "bigsmall": {},
                //         "result": {},
                //         "asian": {}
                //     }
                // )
            } else {
                throw new Error(resp.data.message);
            }
        } else { // http 请求错误
            throw new Error(resp.message);
        }
    }).then((data) => {
        commit(COMBAT_FEATURE, data);
        return data;
    });
}

export function fetchStrengthCompare({commit}) {
    return axios.get(`${ewsDomain}/library/aggregate/strength_compare`).then((resp) => {
        if (resp.status === 200) {
            if (resp.data.status === '100') {
                return resp.data.data;
            } else {
                throw new Error(resp.data.message);
            }
        } else { // http 请求错误
            throw new Error(resp.message);
        }
    }).then((data) => {
        commit(STRENGTH_COMPARE, data);
        return data;
    });
}
