import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/create">Create Account</Link>
        </li>
        <li>
          <Link to="/account">Account Setup</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
