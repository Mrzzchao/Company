/**
 * Created by lichun on 2017/3/31.
 */
import {AWESOME_PREDICT, AWESOME_PREDICT_EXPECT, COLDHOT_DISTRIBUTE, COMBAT_FEATURE, STRENGTH_COMPARE} from './mutation_types';
export default {
    [AWESOME_PREDICT] (state, data) {
        let {expect_list, good_news, curr_expect, matches} = data;
        let allMatches = {};
        expect_list.forEach(expect => {
            // eslint-disable-next-line
            if (expect === curr_expect) {
                allMatches[expect] = matches;
            } else {
                allMatches[expect] = null;
            }
        });

        state.awesome_predict = {
            expect_list, good_news, curr_expect, allMatches
        };
    },
    [AWESOME_PREDICT_EXPECT] (state, data) {
        if (state.awesome_predict.expect_list.some(expect => expect !== data.curr_expect)){
            state.awesome_predict.allMatches[data.curr_expect] = data.matches;
        }
    },
    [COLDHOT_DISTRIBUTE] (state, data) {
        state.coldhot_distribute = data;
    },
    [COMBAT_FEATURE] (state, data) {
        state.combat_feature = data;
    },
    [STRENGTH_COMPARE] (state, data) {
        state.strenght_compare = data;
    }
};