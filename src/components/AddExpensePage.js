import React from 'react';
import ExpenseForm from './ExpenseForm';

// Functional Components

const AddExpensePage = () => (
	<div>
		<h1>ADD EXPENSES</h1>
		<ExpenseForm
			onSubmit={(expense) => {
				console.log(expense);
			}}
		/>
	</div>
);

export default AddExpensePage;
