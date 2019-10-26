import React from 'react';
import "./style.css";
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu width={285}>

      <a className="menu-item" href="/user">
      <i class="fa fa-home"></i>&nbsp;
        Home
      </a>

      <a className="menu-item" onClick={props.editProfile}>
      <i class="fa fa-user-circle"></i>&nbsp;
        Edit Profile
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
<<<<<<< HEAD
        Request a Caption
      </a>

      <a className="menu-item" onClick={props.viewMyRequests}>
      <i class="fa fa-hashtag"></i>&nbsp;
        View My Requests
      </a>

      <a className="menu-item" onClick={props.viewrequestsOption}>
      <i class="fa fa-users"></i>&nbsp;
        Community Requests
      </a>

      <a className="menu-item" onClick={props.logOut}>
      <i class="fa fa-sign-out"></i>&nbsp;
        Logout
      </a>  


      <a className="admin-item">
        MILA Admin 
      </a> 

      {/* insert admin options here when admin page becomes obsolete */}
      

      <a className="menu-item" onClick={props.createAdminOption}>
      <i class="fa fa-plus-circle"></i>&nbsp;
        Create Mila Caption
      </a>

      <a className="menu-item" onClick={props.editMilaOption}>
      <i class="fa fa-edit"></i>&nbsp;
        View/Edit Captions
      </a>

      <a className="menu-item" onClick={props.createCategoryOption}>
      <i class="fas fa-folder-plus"></i>&nbsp;
        Create Category
      </a>

      <a className="menu-item" onClick={props.featureOption}>
      <i class="fa fa-star"></i>&nbsp;
        Feature Captions
=======
        Request
      </a>

      <a className="menu-item" onClick={props.viewrequestsOption}>
      <i class="fa fa-hashtag"></i>&nbsp;
        View My Caps
>>>>>>> dec466051ff5d2b891ac3161e385fa50af816066
      </a>

    </Menu>
  );
};

