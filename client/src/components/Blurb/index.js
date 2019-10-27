import React from 'react'
import './css/blurb.css'

function Blurb () {
    return (
      <>
      <div class="container" id="blurbContainer">
        <div class="row">
          <div class="lg-col-6">
            <div id="blurb">Why MILA?</div>
          </div>
          {/* <div class="lg-col-6">
            <div id="blurb2">WHY MILA</div>
          </div> */}
          </div>
      <div id="convo">
       <div class="row">
        <div class="lg-col-6">
        <ul>
            <li class="l" data-aos="fade-right">I had so much fun last night. One too many spicy margs...</li>
            <li class="r" data-aos="fade-left">Same! We got so many cute pics</li>
            <li class="l" data-aos="fade-right">I know.. I'm going to post in a little. Help me come up with a good caption</li>
            <li class="r" data-aos="fade-left">Download MILA. It's a life saver.</li>
            <li class="r" data-aos="fade-left">fdafasdfasdfasdfasdfasdfadsf</li>
      </ul>
      </div>
      </div>
      </div>
    </div>
    </>
    )
}

export default Blurb