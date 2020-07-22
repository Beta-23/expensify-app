import React from 'react';
import moment from 'moment';

const now = moment();

console.log(now);

export default class ExpenseForm extends React.Component {
	state = {
		description: '',
		note: '',
		amount: ''
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
	// Logic with regular expressions
	onAmountChange = (e) => {
		const amount = e.target.value;
		if (amount.match(/^\d*(\.\d{0,2})?$/)) {
			this.setState(() => ({amount}));
		}
	};

	render () {
		return (
			<div>
				<form>
					<input
						type='text'
						placeholder='Description'
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
					<textarea placeholder='Add Expense Notes (optional)' value={this.state.note} onChange={this.onNoteChange} />
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}
