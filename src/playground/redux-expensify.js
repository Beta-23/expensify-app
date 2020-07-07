import { createStore, combineReducers } from 'redux';

const demoState = {
	expenses : [
		{
			id          : 'kdjfkdjksd',
			description : 'Jan Rent',
			note        : 'Final rent payment',
			amount      : 7500,
			createdAt   : 0
		}
	],
	filters  : {
		text      : 'rent',
		sortBy    : 'amount',
		startDate : undefined,
		endDate   : undefined
	}
};
