import React from "react";
import {exusecontext} from "../App"
import { useContext } from "react";

const Navbar=()=>{
  const x = useContext(exusecontext)
    return(
  
      <div> this is navbar
         <>
       <h1>{x}</h1>
     </>
      </div>
      
     
    );
}

export default Navbar;