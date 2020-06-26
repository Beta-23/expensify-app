import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

// Functional Components

const NotFoundPage = () => (
    <div>
        404 
    </div>
);

const Header = () => (
    <header>
        <h1>ExpensifyApp</h1>
            <NavLink to="/" activeClassName="is-active" exact={ true }>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">QA</NavLink>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route path="/" component={ ExpenseDashboardPage } exact={ true }/>
                    <Route path="/create" component={ AddExpensePage } />
                    <Route path="/edit" component={ EditExpensePage } />
                    <Route path="/help" component={ HelpPage } />
                    <Route component={ NotFoundPage } />
                </Switch>
        </div>   
    </BrowserRouter>
);

export default AppRouter;