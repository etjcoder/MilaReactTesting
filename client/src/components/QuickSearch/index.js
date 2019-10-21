import React from 'react'
import './style.css'

function QuickSearch () {
  return (
    <div className="quick-search" data-aos="fade-right">
    <div id="qsform">
        <input type="text" title="Quick Search" placeholder="  Quick Search"/>
        <button type="submit" className="btn">Search</button>
    </div>
    </div>

  )
}

export default QuickSearch