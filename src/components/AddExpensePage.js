import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

// Functional Components

const AddExpensePage = (props) => (
	<div>
		<h1>ADD EXPENSES</h1>
		<ExpenseForm
			onSubmit={(expense) => {
				props.dispatch(addExpense(expense));
			}}
		/>
	</div>
);

export default connect()(AddExpensePage);
