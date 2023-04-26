import React from "react"
import ReactDOM from "react-dom"
import  "./App.css"
import Navbarpage from "./Navbarpage"
import HomePage from "./HomePage"
import Footer from "./Footer"
import Founder from "./Founder"
import ContactPage from "./ContactPage"
import Chef from "./Chef"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Quality from "./Quality"
import MenuPage from "./MenuPage"
import Tea from "./Tea"
import ReservationPage from "./ReservationPage"
import Card from "./Card"
const App=()=>{
  return(
    <>
    <Card />
    {/* <ReservationPage /> */}
    {/* <Tea /> */}
    {/* <MenuPage /> */}
    {/* <HomePage /> */}
    {/* <Quality /> */}
     {/* <Navbarpage />
<Front />

<Founder />    */}

{/* <ContactPage />   */}
{/* <Chef /> */}
{/* <Footer />  */} 

 <BrowserRouter>
<Navbarpage />
    <Routes>
     <Route exact path="/" element={<HomePage/>} />   
    {/* <Route exact path="/AboutPage" element={<AboutPage />} />   */}
   <Route exact path="/MenuPage" element={<MenuPage />} /> 
  <Route exact path="/ChefPage" element={<Chef />} /> 
  <Route exact path="/ContactPage" element={<ContactPage />} />    
    <Route exact path="/ReservationPage" element={<ReservationPage/>} />   
      </Routes> 
    <Footer />
</BrowserRouter>    






    </>
  )
}
export default App;