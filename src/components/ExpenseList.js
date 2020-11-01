import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
	<div>
		<h5>DASH | App dashboard Component</h5>
		{props.expenses.map((expense) => {
			return <ExpenseListItem key={expense.id} {...expense} />;
		})}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

// Using the connect library for props to use and to what component
export default connect(mapStateToProps)(ExpenseList);
