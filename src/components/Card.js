import React from "react";
import image from '../2.jpg'
const Card =(props)=>{
    // this is functio the second method to create handeling function props
    const handelclick =()=>{
        props.click();
    }
    return(
        <div className="content">
            <img className="image" src={props.imag} alt=""></img>
            <a>{props.children}</a>
            <p>{props.title}</p>
          
            <button onClick={handelclick}>Click</button>
        </div>

    )
};

//{()=>props.click()}  this is method to handel function
export default Card;