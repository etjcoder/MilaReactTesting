import React from 'react'
import './style.css'

function ContactForm () {
    return (
      <>
       <div className="bg-image img8">
      <div id="contact-form">
	<div>
		<h4>Have a question or just want to get in touch? Let's chat.</h4> 
	</div>
		<p id="failure">Oopsie...message not sent.</p>  
		<p id="success">Your message was sent successfully. Thank you!</p>

			<div>
		      <label for="name">
		      	<span class="required">*Name: </span> 
		      	<input type="text" id="name" name="name" value="" placeholder="Your Name" required="required" />
		      </label> 
			</div>
			<div>
		      <label for="email">
		      	<span class="required">*Email: </span>
		      	<input type="email" id="email" name="email" value="" placeholder="Your Email" required="required" />
		      </label>  
			</div>
			<div>		          
		      <label for="subject">
		      <span>Subject: </span>
			      <select id="subject" name="subject" tabindex="4">   
			         <option value="general">Download Question</option>
			         <option value="general">Community Caption Question</option>  
                     <option value="general">Suggestables Question</option>
                     <option value="general">User Profile Question</option>
			         <option value="general">Other inquiry</option>
			      </select>
		      </label>
			</div>
			<div>		          
		      <label for="message">
		      	<span class="required">Message: *</span> <br/>
		      	<textarea id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required"></textarea> 
		      </label>  
			</div>
			<div>		           
		      <button name="submit" type="submit" id="submit" >S E N D</button> 
			</div>

	</div>
    </div>

    </>
    )
}

export default ContactForm