import React from 'react';
import { NavLink } from 'react-router-dom';

// Functional Components
const Header = () => (
    <header>
        <h1>ExpensifyApp</h1>
            <NavLink to="/" activeClassName="is-active" exact={ true }>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">QA</NavLink>
    </header>
);

export default Header;