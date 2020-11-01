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
export const storeResult = (ctr) =>({ type: STORE_RESULT, value: ctr })
export const deleteResult = (i) =>({ type: DELETE_RESULT, idx: i })
