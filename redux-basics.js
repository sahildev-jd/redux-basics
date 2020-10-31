const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0,
}

// Reducer
// Never mutate the state directly, always return a new state.
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1,
            };
        case 'ADD_10':
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        default:
            break;
    }
    return state;
}

// Store
const store = createStore(rootReducer);

// Subscribe
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatch actions
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_10', payload: 10 });
store.dispatch({ type: 'DEC_COUNTER', payload: -1 });
