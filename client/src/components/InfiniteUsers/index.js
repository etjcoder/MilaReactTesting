// tutorial and snippets taken from alligator.io

import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import request from "superagent";
// import InfiniteScroll from 'react-infinite-scroller';
import debounce from "lodash.debounce";
import VirtualList from 'react-virtual-list';

import "./style.css";


class InfiniteUsers extends Component {
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
        loadUsers();
      }
    };
  }

  componentWillMount() {
    // Loads some users on initial load
    this.loadUsers();
  }

  loadUsers = () => {
    this.setState({ isLoading: true }, () => {
      request
        .get('https://randomuser.me/api/?results=50')
        .then((results) => {
          // Creates an array of user and caption data
          // will replace with highest ranked caption and the submitted photo
          const nextUsers = results.body.results.map(user => ({
            name: Object.values(user.name).join(' '),
            photo: user.picture.medium,
            username: user.login.username,
            uuid: user.login.uuid,
          }));

          // Merges the next users into our existing users
          this.setState({
            // Note: Depending on the API/database you're using, this value may
            // be returned as part of the payload to indicate that there
            // is no additional data to be loaded
            hasMore: (this.state.users.length < 100),
            isLoading: false,
            users: [
              ...this.state.users,
              ...nextUsers,
            ],
          });
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            isLoading: false,
           });
        })
    });
  }

  render() {
    const {
      error,
      hasMore,
      isLoading,
      users,
    } = this.state;

    return (
      <container>
        <h1>Community Captions</h1>
        {users.map(user => (
          <Fragment key={user.username}>
            <hr />
            <div id="scrolly" style={{ display: 'flex' }}>
              <img
                alt={user.username}
                src={user.photo}
                style={{
                  borderRadius: '50%',
                }}
              />
              <div id="CommunityCard">
              <p>Caption: {user.name}</p>
              <p> @{user.username}  </p>
              </div>
            </div>
          </Fragment>
        ))}
        <hr />
    
        {isLoading &&
          <div style={{ color: 'white'}}>Loading...</div>
        }
        {!hasMore &&
          <div style={{ color: 'white'}}>Come back later for more!</div>
        }
      </container>
    );
  }
}

export default InfiniteUsers  