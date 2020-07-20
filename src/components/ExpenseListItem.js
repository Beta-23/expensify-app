import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

// statless functional component
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
	<div>
		<h3>{description}</h3>

		<p>
			Amount: {amount} Time Stamp: {createdAt}
			<button
				onClick={(e) => {
					dispatch(removeExpense({id}));
				}}
			>
				Remove
			</button>
		</p>
	</div>
);

export default connect()(ExpenseListItem);
