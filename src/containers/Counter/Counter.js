import React, { Component, useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

// class Counter extends Component {
//     state = {
//         counter: 0
//     }

//     counterChangedHandler = (action, value) => {
//         switch (action) {
//             case 'inc':
//                 this.setState((prevState) => { return { counter: prevState.counter + 1 } })
//                 break;
//             case 'dec':
//                 this.setState((prevState) => { return { counter: prevState.counter - 1 } })
//                 break;
//             case 'add':
//                 this.setState((prevState) => { return { counter: prevState.counter + value } })
//                 break;
//             case 'sub':
//                 this.setState((prevState) => { return { counter: prevState.counter - value } })
//                 break;
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {/* <CounterOutput value={this.state.counter} /> */}
//                 <CounterOutput value={this.props.ctr} />
//                 <CounterControl label="Increment" clicked={() => this.counterChangedHandler('inc')} />
//                 <CounterControl label="Decrement" clicked={() => this.counterChangedHandler('dec')} />
//                 <CounterControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} />
//                 <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} />
//             </div>
//         );
//     }
// }
const Counter = (props) => {
    // const { ctr } = props;
    // state = {
    //     counter: 0
    // }
    const ctr = useSelector(state => state.counter)

    const dispatch = useDispatch();
    const incrementCounter = useCallback(() => {
        dispatch({ type: 'INC_COUNTER' });
    }, [dispatch]);
    const decrementCounter = useCallback(() => {
        dispatch({ type: 'DEC_COUNTER' });
    }, [dispatch]);
    const addCounter = useCallback((val) => {
        dispatch({ type: 'ADD_COUNTER', value: val });
    }, [dispatch]);
    const subtractCounter = useCallback((val) => {
        dispatch({ type: 'SUBTRACT_COUNTER', value: val });
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