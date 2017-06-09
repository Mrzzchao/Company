import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../common/config';

Vue.use(VueResource);

const state = {
    basketballMatch: []
};

const mutations = {
    GET_BASKETBALL_DATA(state, match){
        state.basketballMatch = match;
    }
};

const actions = {
    getBasketballData({commit}){
        Vue.http.get(`${domain.ewsDomain}/library/lq/leagues?areaid=0&T=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100'){
                commit('GET_BASKETBALL_DATA', resp.data.data);
            }
        });
    }
};

export default{
    state,
    actions,
    mutations
};