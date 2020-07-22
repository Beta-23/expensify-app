import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export default class ExpenseForm extends React.Component {
	state = {
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		calendarfocused: false
	};
	// Event listeners
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({description}));
	};

	// used e.persist event listeners
	onNoteChange = (e) => {
		e.persist();
		this.setState(() => ({note: e.target.value}));
	};
	// Amount input Logic with regular expressions starting with 1 to ∞
	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({amount}));
		}
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({createdAt}));
		}
	};

	onFocusChange = ({focused}) => {
		this.setState(() => ({calendarfocused: focused}));
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({
				error: 'Please Provide Valid Description and/or Amount'
			}));
		}
		else {
			this.setState(() => {
				error: '';
			});
			console.log('expense submited!');
		}
	};

	render () {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input
						type='text'
						placeholder='Description'
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />

					<SingleDatePicker
						date={this.state.createdAt} // momentPropTypes.momentObj or null
						onDateChange={this.onDateChange} // PropTypes.func.isRequired, track changes
						focused={this.state.calendarfocused} // PropTypes.bool
						onFocusChange={this.onFocusChange} // PropTypes.func.isRequired, track changes
						numberOfMonths={1} // number of month calendars on page
						isOutsideRange={() => false} // every single day available
					/>
					<textarea placeholder='Add Expense Notes (optional)' value={this.state.note} onChange={this.onNoteChange} />
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}
