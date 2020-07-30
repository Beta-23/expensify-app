import React from 'react';
import {Link} from 'react-router-dom';

// statless functional component
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
	<div>
		<Link to={`/edit/${id}`} activeClassName='is-active' exact={true}>
			<h3>{description}</h3>
		</Link>
		<p>
			Amount: {amount} Time Stamp: {createdAt}
		</p>
	</div>
);

export default ExpenseListItem;
