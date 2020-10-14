import expensesReducer from '../../reducers/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual([]);
}); //assertion expect empty state array
