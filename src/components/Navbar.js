import React from "react";
import fs from "../images/Fs.png";
import log from "../images/log-in.png";
import food from "../images/mdi_food-turkey.png";
import noodle from "../images/mdi_noodles.png";
import cart from "../images/cart.png";
import dine from"../images/Vector.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Navbar()
{
/*     const [isOpen,setIsOpen]= useState
 */    const navigate=useNavigate();
   /*  const toggleMenu=()=>{
        setIsOpen(!isOpen)
    } */
    return(
         <section className="nav-body">
         <article className="nav-part-1">
            <img onClick={()=>{navigate('/')}} src={fs}/>
         </article>
           <article className="nav-part-2">
           <img onClick={()=>{navigate('/categories')}} src={food}/>
           <img  onClick={()=>{navigate('/Cart')}} src={cart} />
           <img onClick={()=>{navigate('/dinein')}} src={dine}/>
        </article>
        <article className="nav-part-3">
            <img src={log}/>
        </article>
        </section>
    )
}
export default Navbar;