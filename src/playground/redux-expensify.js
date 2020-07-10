import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';
// ADD_EXPENSE action generator
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type    : 'ADD_EXPENSE',
	expense : {
		id          : uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type : 'REMOVE_EXPENSE',
	id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type    : 'EDIT_EXPENSE',
	id,
	updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type : 'SET_TEXT_FILTER',
	text
});
// SORT_BY_DATE
const sortByDate = () => ({
	type : 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = (amount = 0) => ({
	type   : 'SORT_BY_AMOUNT',
	amount
});
// SET_START_DATE
// SET_END_DATE

// Expense Reducer Array
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expense ];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				}
				else {
					return expense;
				}
			});
		default:
			return state;
	}
};

// Filters Reducer Object
const filtersReducerDefaultState = {
	text      : '',
	sortBy    : 'date',
	startDate : undefined,
	endDate   : undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text : action.text
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				amount : action.amount
			};
		case 'SORT_BY_DATE': {
			return {
				...state,
				sortBy : 'date'
			};
		}
		default:
			return state;
	}
};

// Store creation
const store = createStore(
	combineReducers({
		expenses : expenseReducer,
		filters  : filtersReducer
	})
);

store.subscribe(() => {
	console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 350 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
store.dispatch(sortByAmount('amount'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate('date'));
store.dispatch(sortByDate());

const demoState = {
	expenses : [
		{
			id          : 'kdjfkdjksd',
			description : 'Jan Rent',
			note        : 'Final rent payment',
			amount      : 7500,
			createdAt   : 0
		}
	],
	filters  : {
		text      : 'rent',
		sortBy    : 'amount',
		startDate : undefined,
		endDate   : undefined
	}
};

// Obj spread via the babel "transform-object-rest-spread" plugin
// const user = {
// 	name : 'joe',
// 	age  : 26
// };

// console.log({ ...user, location: 'NYC', age: 44 });
