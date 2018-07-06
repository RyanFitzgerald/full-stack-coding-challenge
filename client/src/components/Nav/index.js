import React from 'react';

// Import components
import Link from './Link';

function Nav() {
  return (
    <nav>
      <Link to="/">Search</Link>
      <Link to="/add">Add</Link>
    </nav>
  );
}

export default Nav;