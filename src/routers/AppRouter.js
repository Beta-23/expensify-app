import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';

// Functional Components

// const AddExpensePage = () => (
//     <div>
//         <h5>ADD | App Expense Component</h5>
//     </div>
// );

const EditExpensePage = () => (
    <div>
        <h5>EDIT | App Expense Component</h5>
    </div>
);

const HelpPage = () => (
    <div>
        <h5>HELP | App Expense Component</h5>
    </div>
);

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