import Vue from 'vue';
import VueRouter from 'vue-router';

import Predict from './pages/Predict';
import Record from './pages/Record';
import Strength from './pages/Strength';
import Hotcool from './pages/Hotcool';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/predict',
            component: Predict
        },
        {
            path: '/record',
            component: Record
        },
        {
            path: '/strength',
            component: Strength
        },
        {
            path: '/hotcool',
            component: Hotcool
        }
    ]
});