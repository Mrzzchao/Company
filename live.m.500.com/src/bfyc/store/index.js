import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
    awesome_predict: {},
    coldhot_distribute: null,
    strenght_compare: null,
    combat_feature: ''
};

export default new Vuex.Store({
    state,
    actions,
    mutations
});
