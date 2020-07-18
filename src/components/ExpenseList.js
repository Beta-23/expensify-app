import React from 'react';
import {connect} from 'react-redux';

const ExpenseList = (props) => (
	<div>
		<h5>DASH | App dashboard Component</h5>
		{props.expenses.length}
	</div>
);

// Using the connect library from react-redux
export default connect((state) => {
	return {
		expenses: state.expenses
	};
})(ExpenseList);
