/**
 * Created by guxiaojuan on 2017/3/21.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../common/config';

Vue.use(VueResource);

const state = {
    basketStatistic: {}
};
const mutations = {
    UPDATE_BASKET_STATISTIC(state, statistic){
        state.basketStatistic = statistic;
    }
};
const actions = {
    updateBasketStatistic: function({commit}, {id, key}){
        Vue.http.get(`${domain.ewsDomain}/library/lq/statistic?T=${new Date().getTime()}&seasonid=${id}&key=${key}`).then((resp) => {
            if (resp.data.status === '100'){
                commit('UPDATE_BASKET_STATISTIC', resp.data.data);
            }
        });
    }
};

export default{
    state,
    mutations,
    actions
};