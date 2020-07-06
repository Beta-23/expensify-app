import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
            case 'DECREMENT': 
            return {
                count: state.count - 1
            };
            case 'RESET': 
            return {
                count: 0
            };
        default: 
            return state;
    } 
});

store.subscribe(() => {
    console.log(store.getState());
})

/* Actions - is an Object that gets sent to the store, 
it describes the action type to dispatch to state. i.e increment, decrement, reset */

// increment the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});


store.dispatch({
    type: 'INCREMENT',
});

// RESET count to zero
store.dispatch({
    type: 'RESET',
});


// decrement the count
store.dispatch({
    type: 'DECREMENT',
});

