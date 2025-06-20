/* import React from "react";
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
     const navigate=useNavigate();
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
export default Navbar; */

import React from "react";
import { useNavigate } from "react-router-dom";
import fs from "../images/Fs.png";
import log from "../images/log-in.png";
import food from "../images/mdi_food-turkey.png";
import noodle from "../images/mdi_noodles.png"; // Not used, consider removing
import cart from "../images/cart.png";
import dine from "../images/Vector.png";
import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";
function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return (
    <section className="nav-body">
      <article className="nav-part-1">
        <img
          src={fs}
          alt="Logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
      </article>

      <article className="nav-part-2">
        <img
          src={food}
          alt="Categories"
          onClick={() => navigate('/categories')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={cart}
          alt="Cart"
          onClick={() => navigate('/Cart')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={dine}
          alt="Dine-In"
          onClick={() => navigate('/dinein')}
          style={{ cursor: 'pointer' }}
        />
      </article>

      <article className="nav-part-3">
      {user && <p>Hello, {user.username}</p>&&<Login/>}
      {user && <h1 onClick={logout} >Logout</h1>}
        <img onClick={()=> navigate('/login')} src={log} alt="Login" />
      </article>
    </section>
  );
}

export default Navbar;
