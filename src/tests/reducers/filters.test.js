import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Test should setup filter value', () => {
	const state = filtersReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
}); //assertion

test('Test should setup sortBy to amount', () => {
	const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
	expect(state.sortBy).toBe('amount');
}); //assertion
