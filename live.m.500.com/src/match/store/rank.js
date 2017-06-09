import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../common/config';

Vue.use(VueResource);

const state = {
    rank: ''
};
const mutations = {
    UPDATE_RANK(state, rank){
        state.rank = rank;
    }
};
const actions = {
    updateRank: function({commit}, {id}){
        Vue.http.get(`${domain.ewsDomain}/library/lq/rank?T=${new Date().getTime()}&seasonid=${id}&iscup=0`).then((resp) => {
            if (resp.data.status === '100'){
                commit('UPDATE_RANK', resp.data.data);
            }
        });
    }
};

export default{
    state,
    mutations,
    actions
};