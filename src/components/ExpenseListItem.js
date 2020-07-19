import React from 'react';

// statless functional component
const ExpenseListItem = ({description, amount, createdAt}) => (
	<div>
		<h3>{description}</h3>

		<p>
			Amount: {amount} Time Stamp: {createdAt}
		</p>
	</div>
);

export default ExpenseListItem;
