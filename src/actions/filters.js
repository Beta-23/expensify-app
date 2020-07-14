// SET_TEXT_FILTER action type generator
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});
// SORT_BY_DATE action type generator
export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT action type generator
export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE action type generator
export const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});
// SET_END_DATE action type generator
export const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});
