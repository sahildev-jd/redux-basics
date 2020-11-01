import React, { Component, useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {
    incCounter, decCounter, addCtr, subtractCtr,
    STORE_RESULT, DELETE_RESULT, storeResult, deleteResult
} from '../../store/actions/actions';

const Counter = () => {
    // Accessing state as props using selector hook 
    const ctr = useSelector(state => state.counterReducer.counter);
    const results = useSelector(state => state.resultReducer.results);

    const dispatch = useDispatch();

    const incrementCounter = useCallback(() => {
        dispatch(incCounter());
    }, [dispatch]);
    const decrementCounter = useCallback(() => {
        dispatch(decCounter());
    }, [dispatch]);
    const addCounter = useCallback((val) => {
        dispatch(addCtr(val));
    }, [dispatch]);
    const subtractCounter = useCallback((val) => {
        dispatch(subtractCtr(val));
    }, [dispatch]);

    const onStoreResult = useCallback(() => {
        dispatch(storeResult(ctr));
    }, [dispatch, ctr]);
    const onDeleteResult = useCallback((i) => {
        dispatch(deleteResult(i));
    }, [dispatch]);

    const counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                incrementCounter();
                break;
            case 'dec':
                decrementCounter();
                break;
            case 'add':
                addCounter(5);
                break;
            case 'sub':
                subtractCounter(5);
                break;
        }
    }

    return (
        <div>
            <CounterOutput value={ctr} />
            <CounterControl label="Increment" clicked={() => counterChangedHandler('inc')} />
            <CounterControl label="Decrement" clicked={() => counterChangedHandler('dec')} />
            <CounterControl label="Add 5" clicked={() => counterChangedHandler('add', 5)} />
            <CounterControl label="Subtract 5" clicked={() => counterChangedHandler('sub', 5)} />
            <hr />
            <button onClick={onStoreResult}>Store Result</button>

            <ul>
                {results.map((result, i) => (
                    <li
                        onClick={(e) => onDeleteResult(i)}
                        key={i}
                    >{result}</li>
                ))}
            </ul>
        </div>
    );
}

/* 
    Use these reducer methods for classes and use the state and methods as props for classes
    const mapStateToProps = state => {
        return {
            ctr: state.counter,
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            onIncrementCounter: () => dispatch({ type: 'INC_COUNTER' })
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Counter); 
*/
export default Counter;