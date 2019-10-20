import React from 'react';
import "./style.css";
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu width={300}>
      
      <a className="menu-item" href="/admin">
      <i class="fa fa-home"></i>&nbsp;
        Home
      </a>

      <a className="menu-item" onClick={props.createOption}>
      <i class="fa fa-plus-circle"></i>&nbsp;
        Create Caption
      </a>

      <a className="menu-item" onClick={props.editOption}>
      <i class="fa fa-edit"></i>&nbsp;
        View/Edit
      </a>

      <a className="menu-item" onClick={props.createCatOption}>
      <i class="fas fa-folder-plus"></i>&nbsp;
        Create Category
      </a>

      <a className="menu-item" onClick={props.featureOption}>
      <i class="fa fa-star"></i>&nbsp;
        Featured
      </a>
    </Menu>
  );
};

