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

test('Test should setup sortBy to date', () => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount'
	};

	const action = {type: 'SORT_BY_DATE'};
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
}); //assertion

test('Test should setup text filter', () => {
	const text = 'Filtered text';
	const action = {
		type: 'SET_TEXT_FILTER',
		text
	};
	const state = filtersReducer(undefined, action);
	expect(state.text).toBe(text);
}); //assertion

test('Test should setup startDate filter', () => {
	const startDate = moment();
	const action = {
		type: 'SET_START_DATE',
		startDate
	};
	const state = filtersReducer(undefined, action);
	expect(state.startDate).toEqual(startDate);
}); //assertion
