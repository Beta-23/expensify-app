import React from 'react';
import {connect} from 'react-redux';

const ExpenseListFilters = (props) => (
	<div>
		<input type='text' value={props.filters.text} />
	</div>
);

// Grabbing props from state
const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
