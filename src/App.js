
import React, { useState } from "react";
import Card from "./components/Card";
import './App.css';
import image from './2.jpg';
import Footer from "./components/Footer";
import Error from "./components/Error";
import Main from "./components/Main";
 
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [increase,setincrease]=useState(0)
  const increasevalue =()=>{
    setincrease(increase+1);
  }
  const decreasevalue =()=>{
    setincrease(increase-1);
  }
  const arr =[{title:"MOHAMED1",imag:'1.jpg'},{title:"MOHAMED9",imag:"1.jpg"},{title:"HISHAM"} ]
  const click =()=>{console.log("print test prop unction");}
 const value_onchange_input =(e)=>{
  console.log(e.target.value)
 }
 /*const forfooter=()=>{
  if(window.location.pathname =='/footer')
  return <Footer/>
 }*/
  return (
    
    <div className="App">
  
  <div className="searchbar">  <input type="text" onChange={value_onchange_input}/> </div>
     <div className="App">
     {
      /* {forfooter()}   //THIS IS CALL FOOTER PATH*/  
    arr.length>=1?(arr.map((e,i) => {
      return (   
     
            <Card key={i} title={e.title} imag={e.imag} click={click}>
              <h1>Movies  </h1>
              
              </Card>
             
      )
     })):<h1 className="alert">Not Found</h1>
    }
    <div className="useState_hook">
      <button onClick={increasevalue} >+</button>
      <button onClick={decreasevalue}>-</button>
      {increase}
    </div>
    </div>        
    
 
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}


export default App;
