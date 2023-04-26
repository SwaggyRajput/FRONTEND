import React from "react"
import ReactDOM from "react-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
  return (
    <>
      <div className="home1">
        <img className="frontpage" src="https://images.unsplash.com/photo-1594179047519-f347310d3322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="Image Not Found" />
       </div>
      <div className="home2">
            <div  className="homediv1">
                 <img className="midpage" src="https://themecanel.rktheme.com/cafeteria/wp-content/uploads/2023/01/dl.beatsnoop.com-high-8f5eaf1edec0722794-2-2-1024x682.jpg" alt="Image Not Found" />
            </div>
            <div className="homediv2">
                <i style={{color:"yellowgreen"}}>Our introduction</i>
                <h1 style={{color:"yellowgreen"}}>About Cafeteria</h1>
                <p style={{color:"whitesmoke"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <p style={{color:"whitesmoke"}}>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
                <button className="discover">Discover More</button>
             </div>
      </div>
     
      </>
 
  );
}

export default HomePage;