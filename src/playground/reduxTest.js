import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + 1
            };
            case 'DECREMENT': 
            return {
                count: state.count - 1
            };
        default: 
            return state;
    } 
});

console.log(store.getState());

/* Actions - is an Object that gets sent to the store, 
it describes the action type to dispatch to state. i.e increment, decrement, reset */

// increment the count
store.dispatch({
    type: 'INCREMENT',
});

// decrement the count
store.dispatch({
    type: 'DECREMENT',
});

store.dispatch({
    type: 'DECREMENT',
});


console.log(store.getState());
