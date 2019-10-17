import React from 'react';
import "./style.css";
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>




      <a className="menu-item" href="/user">
        Home
      </a>

      <a className="menu-item" onClick={props.searchOption}>
        Search Mila's Captions
      </a>

      <a className="menu-item" onClick={props.createOption}>
        Create a Community Caption
      </a>

      <a className="menu-item" onClick={props.editOption}>
        View/Edit your Community Captions
      </a>

      <a className="menu-item" onClick={props.requestOption}>
        Request a Caption
      </a>

      <a className="menu-item" onClick={props.viewrequestsOption}>
        View Requests
      </a>
    </Menu>
  );
};

// export default SideNavPage;