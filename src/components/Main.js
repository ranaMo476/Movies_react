import React from "react";
import { Link } from "react-router-dom";

const Main=()=>{
    return(
        <>
        <div className="main">
            Main
        </div>
        <button>
            <Link to="/footer">Footer</Link>
        </button>
        <button>
            <Link to="/navbar">navbar</Link>
        </button>
        </>
    );
}

export default Main;