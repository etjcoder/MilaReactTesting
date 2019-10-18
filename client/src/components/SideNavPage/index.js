import React from 'react';
import "./style.css";
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu width={300}>

      <a className="menu-item" href="/user">
      <i class="fa fa-home"></i>&nbsp;
        Home
      </a>

      <a className="menu-item" onClick={props.searchOption}>
      <i class="fa fa-search"></i>&nbsp;
        Search
      </a>

      <a className="menu-item" onClick={props.createOption}>
      <i class="fa fa-plus-circle"></i>&nbsp;
        Create
      </a>

      <a className="menu-item" onClick={props.editOption}>
      <i class="fa fa-edit"></i>&nbsp;
        View/Edit
      </a>

      <a className="menu-item" onClick={props.requestOption}>
      <i class="fa fa-camera-retro"></i>&nbsp;
        Request
      </a>

      <a className="menu-item" onClick={props.viewrequestsOption}>
      <i class="fa fa-hashtag"></i>&nbsp;
        View Requests
      </a>
    </Menu>
  );
};

// export default SideNavPage;