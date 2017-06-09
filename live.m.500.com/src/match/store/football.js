import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../common/config';

Vue.use(VueResource);

const state = {
    footballMatch: []
};

const mutations = {
    GET_FOOTBALL_DATA(state, match){
        state.footballMatch = match;
    }
};

const actions = {
    getFootballData({commit}){
        Vue.http.get(`${domain.ewsDomain}/library/zq/leagues?areaid=0&T=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100'){
                commit('GET_FOOTBALL_DATA', resp.data.data);
            }
        });
    }
};

export default{
    state,
    actions,
    mutations
};
