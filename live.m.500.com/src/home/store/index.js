import Vue from 'vue';
import Vuex from 'vuex';
import football from './modules/football';
import basketball from './modules/basketball';
import common from './modules/common';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        football,
        basketball,
        common
    },
    strict: debug
});