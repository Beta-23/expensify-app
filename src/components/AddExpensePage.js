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
				props.onSubmit(expense)
				props.history.push('/'); // Use the history method to push data to dashboard
			}}
		/>
	</div>
);
const mapDispatchToProps = (dispatch) => ({
	onSubmit: (expense) => dispatch(addExpense(expense))
});
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
