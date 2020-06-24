import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 

// Functional Components
const ExpenseDashboardPage = () => (
    <div>
        DASH | App dashboard Component
    </div>
);

const AddExpensePage = () => (
    <div>
        ADD | App Expense Component
    </div>
);

const EditExpensePage = () => (
    <div>
        EDIT | App Expense Component
    </div>
);

const HelpPage = () => (
    <div>
        HELP | App Expense Component
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ ExpenseDashboardPage } exact={ true }/>
            <Route path="/create" component={ AddExpensePage } />
            <Route path="/edit" component={ EditExpensePage } />
            <Route path="/help" component={ HelpPage } />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes,document.getElementById('app'));



