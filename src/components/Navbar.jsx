import React from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';



const Navbar =()=>{

    const [showLogo, setShowLog] =useState(true);
    const handleLinkClick=()=>{
        setShowLog(false);
    }
return(

    <div className="bg-gray-950 text-white h-16 gap-20 flex border-b-2 border-b-white">
       {showLogo && <h4 className="text-3xl mt-5 ml-10">ROYAL <span className="text-yellow-400 font-bold text-xl">TV</span></h4>}
      
    <Link to='/'className="mt-5 ml-10">Home</Link>
    <Link to='/About'className="mt-5">About</Link>
    <Link to='/Contact'className="mt-5">Contact</Link>

    <div className="ml-80 mt-5">
        <button>
       
           <Link to='/Login'>
           Sign-In 
           <FontAwesomeIcon
            icon={faRightToBracket}
            onClick={handleLinkClick} 
            className="mt-1 relative left-5 rotate-180 top-0"
        

            />
          
            </Link>
        </button>
    </div>
    </div>
   



)



}

export default Navbar