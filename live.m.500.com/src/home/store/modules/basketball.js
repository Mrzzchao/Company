import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../../common/config';
Vue.use(VueResource);
Vue.http.options.credentials = true;

const state = {
    basketballMatch: {}
};

const getters = {
    getBasketballMatch: state => state.basketballMatch
};

const actions = {

    /**
     * 更新比赛信息
     */
    updateBasketballMatch({ commit }, match) {
        commit('UPDATE_BASKETBALL_MATCH', match);
    },
    /**
     * 获取比赛信息
     */
    getBasketballMatch({ commit }, { vtype, expect }) {
        expect = expect || '';
        commit('UPDATE_REQUEST_STATE', true);
        commit('UPDATE_BASKETBALL_MATCH', {});
        Vue.http.get(`${domain.ewsDomain}/score/lq/info?vtype=${vtype}&expect=${expect}&t=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100') {
                commit('UPDATE_BASKETBALL_MATCH', resp.data.data);
            }
        }).then(() => {
            commit('UPDATE_REQUEST_STATE', false);
        });
    },
    /**
     * 获取关注的比赛
     */
    getBasketballConcernMatch({ commit }, { vtype }) {
        commit('UPDATE_REQUEST_STATE', true);
        commit('UPDATE_BASKETBALL_MATCH', {});
        Vue.http.get(`${domain.ewsDomain}/score/concern/list?vtype=${vtype}&t=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100') {
                commit('UPDATE_BASKETBALL_MATCH', resp.data.data);
            }
        }).then(() => {
            commit('UPDATE_REQUEST_STATE', false);
        });
    }
};
const mutations = {
    UPDATE_BASKETBALL_MATCH(state, match) {
        state.basketballMatch = match;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};