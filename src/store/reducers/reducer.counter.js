import {
    INC_COUNTER, DEC_COUNTER, SUBTRACT_COUNTER, ADD_COUNTER
} from '../actions/actions.constants';
import { updateObject } from '../storeUtility';

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return updateObject(state, { counter: state.counter + 1 });
        case DEC_COUNTER:
            return updateObject(state, { counter: state.counter - 1 });
        case ADD_COUNTER:
            return updateObject(state, { counter: state.counter + action.value });
        case SUBTRACT_COUNTER:
            return updateObject(state, { counter: state.counter - action.value });
    }
    return state;
};

export default counterReducer;