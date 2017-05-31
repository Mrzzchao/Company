/**
 * Created by lichun on 2016/10/8.
 */
import Vue from 'vue';
import {FBZS, HZZS, DXZS, ZhiHeZS, ZDZS, YLZS, QYZS, JBZS, JOZS, Q3ZS, FWZS, Q2ZS, Q1ZS, ZHZS} from './mutation-types';

export default {
    [JBZS] (state, {data, tj}) {
        Vue.set(state.page, 'jbzs', data.slice(-50));
        Vue.set(state.page, 'jbtj', tj);
        // console.log(state.page.jbzs);
    },

    [FBZS] (state, data) {
        Vue.set(state.page, 'fbzs', data.slice(-50));
    },
    [HZZS] (state, data) {
        Vue.set(state.page, 'hzzs', data.slice(-50));
    },
    [DXZS] (state, {data}) {
        Vue.set(state.page, 'dxzs', data.slice(-50));
    },
    [ZhiHeZS] (state, {data}) {
        Vue.set(state.page, 'ZhiHezs', data.slice(-30));
    },
    [YLZS] (state, {data}) {
        Vue.set(state.page, 'ylzs', data);
    },
    [ZDZS] (state, {data}) {
        Vue.set(state.page, 'zdzs', data);
    },
    [QYZS] (state, data) {
        Vue.set(state.page, 'qyzs', data.slice(-50));
    },
    [JOZS] (state, {data}) {
        Vue.set(state.page, 'jozs', data.slice(-50));
    },
    [Q3ZS] (state, {data}) {
        Vue.set(state.page, 'q3zs', data.slice(-50));
    },
    [Q2ZS] (state, {data}) {
        Vue.set(state.page, 'q2zs', data.slice(-50));
    },
    [Q1ZS] (state, {data}) {
        Vue.set(state.page, 'q1zs', data.slice(-50));
    },
    [FWZS] (state, {data}) {
        Vue.set(state.page, 'fwzs', data.slice(-50));
    },
    [ZHZS] (state, {data}) {
        Vue.set(state.page, 'zhzs', data.slice(-50));
    }

};