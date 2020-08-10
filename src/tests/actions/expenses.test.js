import {removeExpense, editExpense, addExpense} from '../../actions/expenses';

// Remove Expenses
test('Test should remove expense action object', () => {
	const action = removeExpense({id: 'Fun123'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: 'Fun123'
	}); //assertion
});

// Edit Expenses
test('Test should setup edit expense action object', () => {
	const action = editExpense('Fun123', {note: 'New note value'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: 'Fun123',
		updates: {note: 'New note value'}
	}); //assertion
});

test('Test should setup add expense action object with provided values', () => {
	const expenseData = {
		description: 'Movies',
		amount: 109500,
		createdAt: 1000,
		note: 'Last months entertaiment'
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
}); //assertion

test('Test should setup add expense action object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
}); //assertion
