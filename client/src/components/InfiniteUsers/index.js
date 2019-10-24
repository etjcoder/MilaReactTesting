// tutorial and snippets taken from alligator.io

import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import request from "superagent";
import debounce from "lodash.debounce";
import "./style.css";


class InfiniteUsers extends Component {
  constructor(props) {
    super(props);

    // Sets up  initial state
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      users: [],
    };

    // Binds scroll event handler
    window.onscroll = debounce(() => {
      const {
        loadUsers,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadUsers();
      }
    }, 100);
  }

  componentWillMount() {
    // Loads some users on initial load
    this.loadUsers();
  }

  loadUsers = () => {
    this.setState({ isLoading: true }, () => {
      request
        .get('https://randomuser.me/api/?results=20')
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
      <div>
        <h1 style={{ color: 'white' }}>Community Captions</h1>
        {users.map(user => (
          <Fragment key={user.username}>
            <hr />
            <div style={{ display: 'flex' }}>
              <img
                alt={user.username}
                src={user.photo}
                style={{
                  borderRadius: '50%',
                  height: 70,
                  marginRight: 20,
                  width: 72,
                }}
              />
              <div id="CommunityCard">
                <p>
                  @{user.username}
                </p>
                <p>Name: {user.name}</p>
              </div>
            </div>
          </Fragment>
        ))}
        <hr />
        {error &&
          <div style={{ color: '#900' }}>
            {error}
          </div>
        }
        {isLoading &&
          <div style={{ color: 'white'}}>Loading...</div>
        }
        {!hasMore &&
          <div style={{ color: 'white'}}>Come back later for more!</div>
        }
      </div>
    );
  }
}

export default InfiniteUsers 