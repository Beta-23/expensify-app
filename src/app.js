import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import storeconfig from './store/storeconfig';
import {addExpense} from './actions/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = storeconfig();

store.dispatch(addExpense({description: 'Water Bill'}));
store.dispatch(addExpense({description: 'Gas Bill'}));

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
