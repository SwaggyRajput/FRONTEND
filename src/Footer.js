import React from "react"
import InstagramIcon from '@material-ui/icons/Instagram';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MailIcon from '@material-ui/icons/Mail';

function Footer() {
  return (
    <>
      <div className="footerdiv">
        <div>
      <h1>CAFETERIA</h1>
      <p>Nunc ac lectus ullamcorper ultrices felis quis condimentum nunc.</p>
      {/* <InstagramIcon /> */}
     <MailIcon />
      <a>z</a><a>Twitter</a><a>Instagram</a><a>Swiggy</a>
        </div>
        <div>
    <h1>Important</h1>
    <p><a>Home</a><a>Gallery</a></p>
    <p><a>About</a><a>FAQ</a></p>
    <p><a>Menu</a><a>contact</a></p>
</div>
 <div>
<h1>Contact us</h1>
<p>info&example.com</p>
<p>(888) 1234-5678</p>
<p>121 king st. mcg VIC 3000, Australia</p>
</div>
 <div>
<h1>Gallery</h1>
</div>

      </div>
    </>
  );
}

export default Footer;