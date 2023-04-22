import React from "react"
import ReactDOM from "react-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Founder() {
  return (
    <Container fluid style={{backgroundColor:"black"}}>
    <h1 style={{color:"yellow",textAlign:"center"}}>Expert Staff</h1>
    <h1 style={{color:"yellow",textAlign:"center"}}>Meet the Founders</h1>
    
      <Row col-sm-1-lg-3 className="staff">
        <Col>

        <img  clasName=".img1" src="https://themecanel.rktheme.com/cafeteria/wp-content/uploads/2023/01/boy-2-1.webp" alt="Not found" />


        </Col>
        <Col>

        <img clasName=".img2" src="https://themecanel.rktheme.com/cafeteria/wp-content/uploads/2023/01/boy-2-1.webp" alt="Not found" />


        </Col>
        <Col>

        <img clasName=".img3" src="https://themecanel.rktheme.com/cafeteria/wp-content/uploads/2023/01/boy-2-1.webp" alt="Not found" />


        </Col>

   
      </Row>
      
    </Container>
  );
}

export default Founder;