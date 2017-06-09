import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../../common/config';
Vue.use(VueResource);
Vue.http.options.credentials = true;

const state = {
    footballMatch: {}
};

const getters = {
    getFootballMatch: state => state.footballMatch
};

const actions = {

    /**
     * 更新比赛信息
     */
    updateFootballMatch({ commit }, match) {
        commit('UPDATE_FOOTBALL_MATCH', match);
    },
    /**
     * 获取比赛信息
     */
    getFootballMatch({ commit }, { vtype, expect }) {
        commit('UPDATE_REQUEST_STATE', true);
        commit('UPDATE_FOOTBALL_MATCH', {});
        expect = expect || '';
        Vue.http.get(`${domain.ewsDomain}/score/zq/info?vtype=${vtype}&expect=${expect}&t=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100') {
                commit('UPDATE_FOOTBALL_MATCH', resp.data.data);
            }
        }).then(() => {
            commit('UPDATE_REQUEST_STATE', false);
        });
    },
    /**
     * 获取热门比赛
     */
    getFootballHotMatch({ commit }, { expect }) {
        expect = expect || '';
        commit('UPDATE_REQUEST_STATE', true);
        commit('UPDATE_FOOTBALL_MATCH', {});
        Vue.http.get(`${domain.ewsDomain}/score/zq/hot?expect=${expect}&t=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100') {
                commit('UPDATE_FOOTBALL_MATCH', resp.data.data);
            }
        }).then(() => {
            commit('UPDATE_REQUEST_STATE', false);
        });
    },
    /**
   * 获取关注的比赛
   */
    getFootballConcernMatch({ commit }, { vtype }) {
        commit('UPDATE_REQUEST_STATE', true);
        commit('UPDATE_FOOTBALL_MATCH', {});
        Vue.http.get(`${domain.ewsDomain}/score/concern/list?vtype=${vtype}&t=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100') {
                commit('UPDATE_FOOTBALL_MATCH', resp.data.data);
            }
        }).then(() => {
            commit('UPDATE_REQUEST_STATE', false);
        });
    }
};
const mutations = {
    UPDATE_FOOTBALL_MATCH(state, match) {
        state.footballMatch = match;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};