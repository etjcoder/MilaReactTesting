import React from 'react';
import "./style.css";
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu width={300}>

      <a className="menu-item" href="/user">
        Home
      </a>

      <a className="menu-item" onClick={props.searchOption}>
      <i class="fas fa-search"></i>
        Search
      </a>

      <a className="menu-item" onClick={props.createOption}>
        Create
      </a>

      <a className="menu-item" onClick={props.editOption}>
        View/Edit
      </a>

      <a className="menu-item" onClick={props.requestOption}>
        Request
      </a>

      <a className="menu-item" onClick={props.viewrequestsOption}>
        View Requests
      </a>
    </Menu>
  );
};

// export default SideNavPage;