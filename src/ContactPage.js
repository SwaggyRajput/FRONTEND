import { colors } from "@material-ui/core";
import React from "react"
import ReactDOM from "react-dom"

 const ContactPage=()=>{
   return(
    <>
    <div className="contactbgimg">
     <h1 style={{color:"greenyellow",fontSize:"50px",textAlign:"center",lineHeight:"200px"}}>CONTACT US</h1>
   </div> 
    <div className="contactdiv">
      <div className="contact1">
      <h2 style={{textAlign:"center",color:"yellowgreen"}}>Get in Touch</h2>
      <h1 style={{textAlign:"center",color:"bisque"}}>No hesitation! Let's talk to us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <p style={{textAlign:"center"}}>Mail us</p>
      <p style={{textAlign:"center"}}>info@example.com</p>
      <p style={{textAlign:"center"}}>Call us</p>
      <p style={{textAlign:"center"}}>7704818742</p>
      <p style={{textAlign:"center"}}>Location</p>
      <p style={{textAlign:"center"}}>Madhokunj near old katra in front of HDFC bank</p>
      </div>

      <div className="contact2">
      <h3>Have Any Question?</h3>
      <p>Let us know how to get back to you.</p>
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

export default ContactPage;