import { STORE_RESULT, DELETE_RESULT } from './actions.constants';

const saveResult = (ctr) => ({ type: STORE_RESULT, value: ctr });

// Adding async code
export const storeResult = (ctr) => {
    // dispatch is provided by redux-thunk..
    // It blocks the action untill we call the furthur dispatch
    // You can check the console log with our logger middleware
    return dispatch => {
        // Any async function to be executed
        setTimeout(() => {
            dispatch(saveResult(ctr));
        }, 2000);
    }
};

export const deleteResult = (i) => ({ type: DELETE_RESULT, idx: i });