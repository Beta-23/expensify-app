import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

// expense data for testing filters
const expenses = [
	{
		id: '1',
		description: 'Gummy',
		note: '',
		amount: 195,
		createdAt: 0
	},
	{
		id: '2',
		description: 'Rent',
		note: '',
		amount: 109500,
		createdAt: moment(0).subtract(4, 'days').valueOf()
	},
	{
		id: '3',
		description: 'Credit Card',
		note: '',
		amount: 4500,
		createdAt: moment(0).add(4, 'days').valueOf()
	}
];
test('Test should filter by text value', () => {
	const filters = {
		text: 'e',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1]]); //assertion
});

test('Test should filter by startDate', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]]); //assertion
});
