import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../common/config';
Vue.use(VueResource);

const state = {
    statistic: ''
};

const mutations = {
    UPDATE_FOOT_STATISTIC(state, statistic){
        state.statistic = statistic;
    }
};
const actions = {
    updateFootStatistic: function({commit}, {id}){
        Vue.http.get(`${domain.ewsDomain}/library/zq/statistic?T=${new Date().getTime()}&seasonid=${id}`).then((resp) => {
            // console.log({id});
            if (resp.data.status === '100'){
                // console.log(resp.data.data);
                commit('UPDATE_FOOT_STATISTIC', resp.data.data);
            }
        });
    }
};

export default{
    state,
    mutations,
    actions
};
