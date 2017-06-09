require('es6-promise/auto');
require('whatwg-fetch');

import Vue from 'vue';
import App from './app.vue';
import store from './store';
import router from './router';
import { sync } from 'vuex-router-sync';
import vueTap from 'v-tap';

Vue.use(vueTap);
sync(store, router);

var directive = require('./directive/directive');
Object.keys(directive).forEach(function(k) {
    Vue.directive(k, directive[k]);
});

const app = new Vue(Object.assign({
    router,
    store
}, App));

app.$mount('#app');

export { app, router, store };