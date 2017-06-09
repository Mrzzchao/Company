/**
 * Created by guxiaojuan on 2017/3/22.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../common/config';

Vue.use(VueResource);

const state = {
    title: null
};
const mutations = {
    UPDATE_TITLE(state, title){
        state.title = title;
    }
};
const actions = {
    updateFootballTitle: function({commit}, {id}){
        Vue.http.get(`${domain.ewsDomain}/library/zq/baseinfo?seasonid=${id}&T=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100'){
                // console.log(resp.data.data);
                commit('UPDATE_TITLE', resp.data.data);
            }
        });
    }
};

export default{
    state,
    mutations,
    actions
};
