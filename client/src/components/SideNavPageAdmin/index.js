import React from 'react';
import "./style.css";
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu width={200}>




      <a className="menu-item" href="/user">
        Home
      </a>

      <a className="menu-item" onClick={props.createOption}>
        Create Caption
      </a>

      <a className="menu-item" onClick={props.editOption}>
        View/Edit
      </a>

      <a className="menu-item" onClick={props.createCatOption}>
        Create Category
      </a>

      <a className="menu-item" onClick={props.featureOption}>
        Featured
      </a>
    </Menu>
  );
};

// export default SideNavPageAdmin;