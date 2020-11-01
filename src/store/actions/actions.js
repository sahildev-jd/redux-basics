export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';
export const SUBTRACT_COUNTER = 'SUBTRACT_COUNTER';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// Counter
export const incCounter = () => ({ type: INC_COUNTER });
export const decCounter = () => ({ type: DEC_COUNTER });
export const addCtr = (val) => ({ type: ADD_COUNTER, value: val });
export const subtractCtr = (val) => ({ type: SUBTRACT_COUNTER, value: val });

// Result
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

export const deleteResult = (i) => ({ type: DELETE_RESULT, idx: i })
