import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: ++state.count
        };
    } else {
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

// increment the count
store.dispatch({
    type: 'INCREMENT',
});
