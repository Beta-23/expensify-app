import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
        />
    );
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});


