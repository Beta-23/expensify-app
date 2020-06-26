import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 

// Functional Components
const ExpenseDashboardPage = () => (
    <div>
        <h5>DASH | App dashboard Component</h5>
    </div>
);

const AddExpensePage = () => (
    <div>
        <h5>ADD | App Expense Component</h5>
    </div>
);

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
        404 | <Link to="/">Go Home </Link>
    </div>
);

const Header = () => (
    <header>
        <h1>ExpensifyApp</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Expense</Link>
        <Link to="/edit">Edit Expense</Link>
        <Link to="/help">QA</Link>
    </header>
);

const routes = (
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

ReactDOM.render(routes,document.getElementById('app'));



