import React from 'react';
import {connect} from 'react-redux';

const ExpenseList = (props) => (
	<div>
		<h5>DASH | App dashboard Component</h5>
		{props.filters.text}
		{props.expenses.length}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: state.expenses,
		filters: state.filters
	};
};

// Using the connect library for props to use and to what component
export default connect(mapStateToProps)(ExpenseList);
