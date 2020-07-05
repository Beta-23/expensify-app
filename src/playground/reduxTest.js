import { createStore } from 'redux';

// Happy 4th of July 2020!
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + 1
            };
    default: 
        return state
    } 
});

console.log(store.getState());

/* Actions - is an Object that gets sent to the store, 
it describes the action type to dispatch to state. i.e increment, decrement, reset */

// increment the count
store.dispatch({
    type: 'INCREMENT',
});

// increment the count
store.dispatch({
    type: 'INCREMENT',
});

console.log(store.getState());
