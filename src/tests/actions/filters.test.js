import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter} from '../../actions/filters';

test('Test should generate set start date action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
}); //assertion

test('Test should generate set end date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
}); //assertion

test('Test should generate set text filter action object with text value', () => {
	const text = 'Sample text';
	const action = setTextFilter(text);
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text
	});
}); //assertion
