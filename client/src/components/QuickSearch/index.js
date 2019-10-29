import React, { Component } from 'react'
import './style.css'

class QuickSearch extends Component {

  state = {
    keyword: "",
    searchResults: []
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = event => {
    event.preventDefault();

    this.props.searchByKeyword(this.state.keyword)
  }

  render() {
    return (
      <div className="quick-search" data-aos="fade-right">
        <div id="qsform">
          <input type="text" title="Quick Search" name="keyword" onChange={this.handleInputChange} placeholder="  Quick Search" />
          <button type="submit" onClick={this.handleSearch} className="btn">Search</button>
        </div>
      </div>

    )
  }
}

export default QuickSearch