import {removeExpense, editExpense} from '../../actions/expenses';

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
