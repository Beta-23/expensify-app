import { createStore } from 'redux';

// default incrementBy
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type        : 'INCREMENT',
	incrementBy
});

// default decrementBy
const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type        : 'DECREMENT',
	decrementBy
});

// default setCount
const setCount = ({ count }) => ({
	type  : 'SET',
	count
});

// default resetCount
const resetCount = () => ({
	type : 'RESET'
});

/* Reducers
    1. Reducers are pure functions, take in state and an action
    2. Never change state or action only returns the new state obj */

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count : state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count : state.count - action.decrementBy
			};

		case 'SET':
			return {
				count : action.count
			};

		case 'RESET':
			return {
				count : 0
			};
		default:
			return state;
	}
};

// Store
const store = createStore(countReducer);

store.subscribe(() => {
	console.log(store.getState());
});

/* Actions - is an Object that gets sent to the store, 
it describes the action type to dispatch to state. i.e increment, decrement, reset */

// increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// RESET count to zero
store.dispatch(resetCount());

// decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// SET count
store.dispatch(setCount({ count: 100 }));
