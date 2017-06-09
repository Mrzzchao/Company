import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../common/config';

Vue.use(VueResource);

const state = {
    cups: null,
    leagues: null
};

const mutations = {
    UPDATE_CUPS(state, match){
        state.cups = match;
    },
    UPDATE_LEAGUES(state, match){
        state.leagues = match;
    }
};

const actions = {
    updateCups: function({commit}, {vtype}){
        Vue.http.get(`${domain.ewsDomain}/library/zq/cups?areaid=${vtype}&T=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100'){
                // console.log(resp.data.data);
                commit('UPDATE_CUPS', resp.data.data);
            }
        });
    },
    updateLeagues: function({commit}, {vtype}){
        Vue.http.get(`${domain.ewsDomain}/library/zq/leagues?areaid=${vtype}&T=${new Date().getTime()}/`).then((resp) => {
            if (resp.data.status === '100'){
                commit('UPDATE_LEAGUES', resp.data.data);
            }
        });
    }
};

export default{
    state,
    mutations,
    actions
};