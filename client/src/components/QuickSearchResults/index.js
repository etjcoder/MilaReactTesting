import React from 'react'
import './style.css'

function QuickSearchResults (props) {
  return (
    <div className="container" id="qsresults">
    <div className="quick-search-results" data-aos="fade-right">
        
        { props.results.length < 1 ? <p>Sorry no results. Sign in for more options!</p> : null }
        {props.results.slice(0,5).map(result => (
          <span>
          <p key={result._id}>{result.caption}</p>
          <hr />
          </span>
        ))}
    </div>
    </div>

  )
}

export default QuickSearchResults