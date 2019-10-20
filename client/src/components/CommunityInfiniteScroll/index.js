import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
// import "./style.css";

const style = {
  height: 100,
  color: "white",
  opacity: .9,
  border: "3px solid white",
  margin: 4,
  padding: 8
};

class CommunityInfiniteScroll extends React.Component {
    state = {
      items: Array.from({ length: 20 })
    };
  
    fetchMoreData = () => {
      // a fake async api call like which sends
      // 20 more records in 1.5 secs
      setTimeout(() => {
        this.setState({
          items: this.state.items.concat(Array.from({ length: 20 }))
        });
      }, 1500);
    };
  
    render() {
      return (
        <div id="scroll">
          <hr />
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<p>Loading...</p>}
          >
            {this.state.items.map((i, index) => (
              <div style={style} key={index}>
                div - #{index}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      );
    }
  }
  
  export default CommunityInfiniteScroll;
