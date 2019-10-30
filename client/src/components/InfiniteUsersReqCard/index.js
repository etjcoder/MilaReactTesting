// tutorial and snippets taken from alligator.io

import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import request from "superagent";
// import InfiniteScroll from 'react-infinite-scroller';
import debounce from "lodash.debounce";
import VirtualList from 'react-virtual-list';
import SuggestedCaptions from "../SuggestedCaptions"

import "./style.css";


class InfiniteUsersReqCard extends Component {
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
      <container>
        <div id="sugCaps">
        <h4>SuggestedCaptions</h4>
        </div>
        <hr />
        {this.props.suggestions.map(suggestedCap => (
          <SuggestedCaptions
            key={suggestedCap._id}
            id={suggestedCap._id}
            parentID={suggestedCap.parentID}
            suggestion={suggestedCap.caption}
            username={suggestedCap.username}
            authorID={suggestedCap.authorID}
            reference={suggestedCap.reference}
            lyric={suggestedCap.lyric}
            quote={suggestedCap.quote}
            originalAuthor={suggestedCap.originalAuthor}
            likes={suggestedCap.likes}
            likedBy={suggestedCap.likedBy}
            goldstar={suggestedCap.goldstar}
            userdata={this.props.userdata}
            goldStarGiven={this.props.goldStarGiven}
          />
        ))}

        {isLoading &&
          <div style={{ color: 'white' }}>Loading...</div>
        }
        {!hasMore &&
          <div style={{ color: 'white' }}>Come back later for more!</div>
        }
      </container>
    );
  }
}
export default InfiniteUsersReqCard
