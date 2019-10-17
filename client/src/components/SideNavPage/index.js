import React from 'react';
import "./style.css";
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/user">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Search
      </a>

      <a className="menu-item" href="/angular">
        Request a Caption 
      </a>

      <a className="menu-item" href="/react">
        Create Community Caption
      </a>

      <a className="menu-item" href="/vue">
        View Your Captions
      </a>

      <a className="menu-item" href="/node">
        Review Regional
      </a>
    </Menu>
  );
};

// export default SideNavPage;