/**
 * Created by krzysztofk on 2017-07-20.
 */
import { POST_COMMENT } from '../actions/types';
import _ from 'lodash';

export default function reduceCommentsAction(state = [], action) {
    switch(action.type) {
        case POST_COMMENT:
            // return _.union(state, [ action.payload ]);
            return [ ...state, action.payload ];
    }
    return state;
}