import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const errorPage = () => (
    <div>
        404 | App Expense Component
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ ExpenseDashboardPage } exact={ true }/>
            <Route path="/create" component={ AddExpensePage } />
            <Route path="/edit" component={ EditExpensePage } />
            <Route path="/help" component={ HelpPage } />
            <Route path="/404" component={ errorPage } />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes,document.getElementById('app'));



