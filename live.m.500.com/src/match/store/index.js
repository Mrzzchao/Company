import Vue from 'vue';
import Vuex from 'vuex';
import basketball from './basketball';
import football from './football';
import allBasketball from './allBasketball';
import allFootball from './allFootball';
import basketballHeader from './basketballHeader';
import rank from './rank';
import basketballSchedule from './basketSchedule';
import basketStatistics from './basketStatistics';
import footballHeader from './footballHeader';
import footballIntegral from './footballIntegral';
import footballStatistics from './footballStatistics';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        basketball: basketball,
        football: football,
        allBasketball: allBasketball,
        allFootball: allFootball,
        rank: rank,
        basketballHeader: basketballHeader,
        basketballSchedule: basketballSchedule,
        basketStatistics: basketStatistics,
        footballHeader: footballHeader,
        footballIntegral: footballIntegral,
        footballStatistics: footballStatistics
    }

});