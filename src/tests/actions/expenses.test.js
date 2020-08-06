import {removeExpense} from '../../actions/expenses';

// Remove Expenses
test('Test should remove expense action object', () => {
	const action = removeExpense({id: 'Fun123'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: 'Fun123'
	}); //assertion
});
