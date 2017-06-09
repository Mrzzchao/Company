import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Football from './pages/Football.vue';
import Basketball from './pages/Basketball.vue';
import AllBasketball from './pages/AllBasketball.vue';
import AllFootball from './pages/AllFootball.vue';
import Rank from './pages/Rank.vue';
import BasketballSchedule from './pages/BasketSchedule.vue';
import FootballIntegral from './pages/FootballIntegral.vue';
import FootballStatistics from './pages/FootballStatistics.vue';
import BasketStatistics from './pages/BasketStatistics.vue';
import Test from './pages/Test.vue'

export default new VueRouter({
    mode: 'hash',
    routes: [
        {path: '/football', component: Football},
        {path: '/basketball', component: Basketball},
        {path: '/match/basketball', component: AllBasketball},
        {path: '/match/football', component: AllFootball},
        {path: '/basketball-league/rank/:id', component: Rank},
        {path: '/basketball-league/schedule/:id', component: BasketballSchedule},
        {path: '/basketball-league/statistic/:id', component: BasketStatistics},
        {path: '/football-league/integral/:id', component: FootballIntegral},
        {path: '/football-league/statistics/:id', component: FootballStatistics},
        {path:'/test',component:Test}
    ]
});