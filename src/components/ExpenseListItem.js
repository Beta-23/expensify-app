import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

// statless functional component
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
	<div>
		<Link to={`/edit/${id}`} activeClassName='is-active' exact={true}>
			<h3>{description}</h3>
		</Link>
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
