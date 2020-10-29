import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual([]);
}); //assertion expect empty state array

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
}); //assertion to remove index 1 in array data

test('should not remove expenses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
}); //assertion to not remove invalid index -1 in array data

test('should add an expense', () => {
	const expense = {
		id: '109',
		description: 'Laptop',
		note: '',
		createdAt: 20000,
		amount: 29500
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
}); // assertion to add expense

test('should edit an expense', () => {
	const amount = 122000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].amount).toBe(amount);
}); // assertion to edit expense at index 1

test('should not edit an expense if id not found', () => {
	const amount = 122000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
}); // assertion to not edit expense at invalid index -1
