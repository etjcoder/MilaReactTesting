import React from "react";
import "./style.css";

function SearchBtn(props) {
    return (
        <span className="search-btn" {...props} role="button" tabIndex="0">
            Search
        </span>
    );
}

export default SearchBtn