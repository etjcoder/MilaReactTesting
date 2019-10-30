// tutorial and snippets taken from alligator.io

import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import request from "superagent";
// import InfiniteScroll from 'react-infinite-scroller';
import debounce from "lodash.debounce";
import VirtualList from 'react-virtual-list';
import SuggestedCaptions from "../SuggestedCaptions"

import "./style.css";


class InfiniteUsersAdminEdit extends Component {
  constructor(props) {
    super(props);
    // Sets up our initial state
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      users: [],
    };

    // Binds our scroll event handler
    window.onscroll = () => {
      const {
        loadUsers,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;


      // // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        console.log("This is where they would've loaded users..")
      }
    };
  }

  componentWillMount() {
    // Loads some users on initial load
    // this.loadUsers();
  }

  render() {
    const {
      error,
      hasMore,
      isLoading,
      users,
    } = this.state;

    return (
      <div>
        <table className="table" id="editDatabaseTable">
          <thead>
            <tr>
              <th>Caption</th>
              <th>Category</th>
              <th>Author</th>
              <th>Reference</th>
              <th>Original Author</th>
              <th>Tags</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Feature</th>
            </tr>
          </thead>
        <tbody>
        {this.props.milacaptions.map(caption => (
          <tr key={caption._id}>
            <td>{caption.caption}</td>
            <td>{caption.category}</td>
            <td>{caption.author}</td>
            <td>{caption.reference}</td>
            <td>{caption.originalAuthor}</td>
            <td>{JSON.stringify(caption.tags)}</td>
            <td><button id="masterDataBtn" value={caption._id} onClick={() => this.props.editMilaRow(caption)}><i class="fa fa-edit"></i></button></td>
            <td><button id="masterDataBtn" value={caption._id} onClick={() => this.props.deleteCaption(caption._id)}>X</button></td>
            <td><button id="masterDataBtn" value={caption._id} onClick={() => this.props.featureCaption(caption._id)}><i class="fa fa-star"></i></button></td>
          </tr>
        ))}
        </tbody>
        </table>

        {isLoading &&
          <div style={{ color: 'white' }}>Loading...</div>
        }
        {!hasMore &&
          <div style={{ color: 'white' }}>Come back later for more!</div>
        }
      </div>
    );
  }
}
export default InfiniteUsersAdminEdit
