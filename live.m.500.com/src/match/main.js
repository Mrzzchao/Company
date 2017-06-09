import Vue from 'vue';
import App from './pages/App.vue';
import store from './store';
import router from './router';
// import vueTap from 'v-tap';
// Vue.use(vueTap);

var directive = require('./directive/directive');

Object.keys(directive).forEach(function(k) {     // 全局定义所有的自定义指令
    Vue.directive(k, directive[k]);
});

const app = new Vue(Object.assign({
    router,
    store
}, App));

app.$mount('#app');

export { app, router, store };
