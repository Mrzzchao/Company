import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../../common/config';
Vue.use(VueResource);
Vue.http.options.credentials = true;

const state = {
    concern: {}, // 收藏信息
    requestState: true
};

const getters = {
    getConcern: state => state.concern,
    getRequestState: requestState => state.requestState
};
const actions = {
    updateRequestState({ commit }, state) {
        commit('UPDATE_REQUEST_STATE', state);
    },
    getConcernInfo({ commit }, { vtype, lottery }) {
        commit('UPDATE_CONCERN', {});
        Vue.http.get(`${domain.ewsDomain}/score/concern/state?vtype=${vtype}&lottery=${lottery}&t=${new Date().getTime()}`).then((resp) => {
            if (resp.data.status === '100') {
                commit('UPDATE_CONCERN', resp.data.data);
            }
        });
    },
    updateConcernState({ commit }, { vtype, fid, op, lotid, expect }) {
        Vue.http.get(`${domain.ewsDomain}/score/concern/focus?fid=${fid}&vtype=${vtype}&op=${op}&lotid=${lotid}&expect=${expect}&t=${new Date().getTime()}`).then();
    }
};
const mutations = {
    UPDATE_CONCERN(state, concern) {
        state.concern = concern;
    },
    UPDATE_REQUEST_STATE(state, requestState) {
        state.requestState = requestState;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};