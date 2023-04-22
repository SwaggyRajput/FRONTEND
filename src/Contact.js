import React from "react"
import ReactDOM from "react-dom"

 const Contact=()=>{
   return(
    <>
   
    <div className="contactdiv">
      <div className="contact1">
      <h2 style={{textAlign:"center"}}>Get in Touch</h2>
      <h1 style={{textAlign:"center"}}>No hesitation! Let's talk to us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <p style={{textAlign:"center"}}>Mail us</p>
      <p style={{textAlign:"center"}}>info@example.com</p>
      <p style={{textAlign:"center"}}>Call us</p>
      <p style={{textAlign:"center"}}>7704818742</p>
      <p style={{textAlign:"center"}}>Location</p>
      <p style={{textAlign:"center"}}>Madhokunj near old katra in front of HDFC bank</p>
      </div>

      <div className="contact2">
       <p><input align="center" type="text" placeholder="Name" /></p>
       <p><input  type="email" placeholder="Email"/></p>
       <p><input type="number" placeholder="Telephone"/></p>
       <p><input type="text" placeholder="Type Your Message"/></p>
       <submit>Send Message</submit>
      </div>
    </div>


    </>
   )
 }

export default Contact;