import React from "react"
import ReactDOM from "react-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ReservationPage() {
  return (
    <>
{/*  
<div className="reserve">
    <h1 style={{lineHeight:"150px"}}>Reservation</h1>
</div>
<div>
    <h1>Book For</h1>
</div> */}
<div className="reserve">
 <h1 style={{textAlign:"center",lineHeight:"200px"}}>RESERVE A TABLE</h1>
</div>
<div className="reservediv">
  <div>
    <p>Name</p>
    <input />
    <p>Email</p>
    <input type="email"/>
    <p>Phone</p>
    <input type="tel" />
    <p>Number of Guest</p>
    <input type="number"/>
    </div>
    
    <div>
    <p>Date</p>
    <input type="date"/>
    <p>Arrival time</p>
    <input type="time" />
    <p>How did you hear about us?</p>
    <input />
    </div>
    <br />
</div>
<div style={{backgroundColor: "cadetblue",height:"80px"}}>
<button type="submit" className="reservebutton">Book Table</button>
</div>










</>
 
  );
}

export default ReservationPage;