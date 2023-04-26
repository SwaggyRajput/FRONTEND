import React from "react"
import ReactDOM from "react-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tea=()=> {
    const menu=[{food:"pea",price:12},{food:"tea",price:15},
    {
        food:"sea",
    price:16
}



]
   
  return (
    <>

  <div className="tea">
    <h3 style={{textAlign:'center'}}>Tea</h3>
    <ul type="none">
    {menu.map(function(cvalue){
    return(
        <>
        <li><span>{cvalue.food}</span><span>{cvalue.price}</span><span><button>Order</button></span></li>
        
        </>
    )
})
    }


 
    </ul>
  </div>











</>
 
  );
}

export default Tea;