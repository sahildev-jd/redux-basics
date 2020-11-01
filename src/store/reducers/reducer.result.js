import { STORE_RESULT, DELETE_RESULT } from '../actions/actions.constants';
import { updateObject } from '../storeUtility';

const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT: {
            // you can use concat as it returns a new array 
            // don't use push since push returns the original array
            const updatedResults = [...state.results, action.value];
            return updateObject(state, { results: updatedResults });
        }
        case DELETE_RESULT: {
            const updatedResults = [...state.results.filter((_, idx) => idx !== action.idx)];
            return updateObject(state, { results: updatedResults });
        }
    }
    return state;
};

export default resultReducer;