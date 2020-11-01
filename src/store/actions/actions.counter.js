import { ADD_COUNTER, DEC_COUNTER, INC_COUNTER, SUBTRACT_COUNTER } from './actions.constants';

export const incCounter = () => ({ type: INC_COUNTER });
export const decCounter = () => ({ type: DEC_COUNTER });
export const addCtr = (val) => ({ type: ADD_COUNTER, value: val });
export const subtractCtr = (val) => ({ type: SUBTRACT_COUNTER, value: val });