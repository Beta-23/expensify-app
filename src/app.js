import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import storeconfig from './store/storeconfig';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = storeconfig();

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
