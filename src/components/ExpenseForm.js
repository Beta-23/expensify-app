import React from 'react';

export default class ExpenseForm extends React.Component {
	state = {
		description: '',
		note: ''
	};
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({description}));
	};

	// used e.persist
	onNoteChange = (e) => {
		e.persist();
		this.setState(() => ({note: e.target.value}));
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
					<input type='number' placeholder='Amount' />
					<textarea placeholder='Add Expense Notes (optional)' value={this.state.note} onChange={this.onNoteChange} />
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}
