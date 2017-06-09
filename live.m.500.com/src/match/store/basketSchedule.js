import Vue from 'vue';
import VueResource from 'vue-resource';
import domain from '../common/config';

Vue.use(VueResource);

const state = {
    schedule: null
};
const mutations = {
    UPDATE_SCHEDULE(state, schedule){
        state.schedule = schedule;
    }
};
const actions = {
    updateSchedule: function({commit}, {id}){
        Vue.http.get(`${domain.ewsDomain}/library/lq/switch?t=${new Date().getTime()}&seasonid=${id}&iscup=0`).then((resp) => {
            if (resp.data.status === '100'){
                commit('UPDATE_SCHEDULE', resp.data.data);
            }
        });
    }
};

export default{
    state,
    mutations,
    actions
};