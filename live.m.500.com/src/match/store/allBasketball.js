import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../common/config';
const ewsDomain = 'http://192.168.50.43';

Vue.use(VueResource);

const state = {
    europe: null,     // 为了判断是否渲染过要返回undefined，所以不能初始化为数组
    america: null,
    asian: null,
    cup: null
};

const mutations = {
    UPDATE_EUROPE(state, data){
        state.europe = data;
    },
    UPDATE_AMERICA(state, data){
        state.america = data;
    },
    UPDATE_ASIAN(state, data){
        state.asian = data;
    },
    UPDATE_CUP(state, data){
        state.cup = data;
    }
};

const actions = {
    updateEurope: function({commit}){
        Vue.http.get(`${domain.ewsDomain}/library/lq/leagues?areaid=1&T=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100'){
                commit('UPDATE_EUROPE', resp.data.data);
            }
        });
    },
    updateAsian: function({commit}){
        Vue.http.get(`${domain.ewsDomain}/library/lq/leagues?areaid=2&T=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100'){
                commit('UPDATE_ASIAN', resp.data.data);
            }
        });
    },
    updateAmerica: function({commit}){
        Vue.http.get(`${domain.ewsDomain}/library/lq/leagues?areaid=3&T=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100'){
                commit('UPDATE_AMERICA', resp.data.data);
            }
        });
    },
    updateCup: function({commit}){
        Vue.http.get(`${ewsDomain}/library/lq/leagues?areaid=5&T=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100'){
                console.log(resp.data.data);
                // console.log(resp.data.data[0]['countryname'])
                commit('UPDATE_CUP', resp.data.data);
            }
        });
    }

};

export default{
    state,
    mutations,
    actions
};
