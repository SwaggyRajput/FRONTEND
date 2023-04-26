import React from "react"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MailIcon from '@material-ui/icons/Mail';
import { yellow } from "@material-ui/core/colors";
import {Link,to} from 'react-router-dom';
function Footer() {
  const phone="7704818742"
  const Address="121 king st. mcg VIC 3000, Australia"
  return (
    <>
      <div className="footerdiv">
        <div className="footdiv1">
      <h1><span style={{color:"yellowgreen"}}>CAFE</span><span style={{color:"yellow"}}>TERIA</span></h1>
      <p>Nunc ac lectus ullamcorper ultrices felis quis condimentum nunc.</p>
      
      <p style={{paddingLeft:"10px"}}><Link><FacebookIcon /></Link><Link style={{marginLeft:"20px"}}><TwitterIcon /></Link><Link style={{marginLeft:"20px"}}><InstagramIcon /></Link><Link style={{marginLeft:"20px"}}><FastfoodIcon /></Link></p>
        </div>
        <div className="footdiv2">
    <h1>Important</h1>
    <p><Link to="/" style={{textDecoration:"none"}}>Home</Link><Link style={{marginLeft:"20px",textDecoration:"none"}}>Gallery</Link></p>
    <p><Link to="/AboutPage" style={{textDecoration:"none"}}>About</Link><Link style={{marginLeft:"20px",textDecoration:"none"}}>FAQ</Link></p>
    <p><Link to="/MenuPage" style={{textDecoration:"none"}}>Menu</Link><Link to="/ContactPage" style={{marginLeft:"20px",textDecoration:"none"}}>Contact</Link></p>
</div>
 <div className="footdiv3">
<h1>Contact us</h1>
<p>info&example.com</p>
<p>{phone}</p>
<p>{Address}</p>
</div>
 <div className="footdiv4">
<h1>Gallery</h1>
</div>

      </div>
    </>
  );
}

export default Footer;