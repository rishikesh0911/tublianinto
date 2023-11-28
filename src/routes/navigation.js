import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/create">Create Account</Link>
        </li>
        <li>
          <Link to="/create/setup">Account Setup</Link>
        </li>
        <li>
          <Link to="/create/payment">Payment</Link>
        </li>
        <li>
          <Link to="/create/payment/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
