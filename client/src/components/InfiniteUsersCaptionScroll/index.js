// tutorial and snippets taken from alligator.io

import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import request from "superagent";
// import InfiniteScroll from 'react-infinite-scroller';
import debounce from "lodash.debounce";
import VirtualList from 'react-virtual-list';
import TopSuggestion from '../TopSuggestion';

import "./style.css";


class InfiniteUsersCaptionScroll extends Component {
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
        console.log("This is where they would've loaded users...")
      }
    };
  }

  componentWillMount() {
    // Loads some users on initial load
    // this.loadUsers();
  }

  onClickShowCaptionCard = (id) =>{
    console.log("You've chosen to view caption ID: " + id)
    //this.props.getSuggestable
    //this.props.showSuggestable

    if (this.props.suggestableShown === false ) {
        this.props.getSuggestable(id)
        this.props.showSuggestable()
    } else {
        this.props.getSuggestable(id)
    }
    

  }

  getTopCaption = (id) => {


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
        <h1>Community Requests</h1>
        {this.props.suggestables.map(suggestable => (
          <Fragment key={suggestable._id}>
            {/* <hr /> */}
            <div onClick={() => this.onClickShowCaptionCard(suggestable._id)} id="scrolly" style={{ display: 'flex' }}>
              <img
                src={suggestable.imageURL}
                style={{
                  borderRadius: '50%',
                  marginLeft: '4%',
                  height: '100px',
                  width: '100px'
                }}
              />
              <div id="CommunityCard" style={{ marginLeft: '4%', marginTop: '2%'}}>
              <p><strong><u>{suggestable.description}</u></strong></p>
              <p><TopSuggestion suggestions={suggestable.suggestedCaptions}/></p>
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
export default InfiniteUsersCaptionScroll

