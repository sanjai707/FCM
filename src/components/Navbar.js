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
export default Navbar; 

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
      {user && <p>Hello, {user.username}</p>}
      {user && <h1 onClick={logout} >Logout</h1>}
        <img onClick={()=> navigate('/login')} src={log} alt="Login" />
      </article>
    </section>
  );
}

export default Navbar;
*/


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
import { useState } from "react";
import Login from "./Login";
function Navbar() {
  const { user, isAuthenticated,logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev)=>!prev);
  };
  const handleNavigate=(path)=>{
    navigate(path);
    setIsMobileMenuOpen(false);
  }
  
  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
      navigate("/");
    } else 
    {
      navigate("/login");
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="nav-body">
      <article className="nav-part-1">
        <img onClick={() => navigate("/")} src={fs} alt="Logo" />
      </article>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* <article className={`nav-part-2 ${isMobileMenuOpen ? "open" : ""}`}>

        <article className="nav-part-2-row"> <img className="nav-icon" onClick={() => navigate("/categories")} src={food} alt="Food" /> <h1>Food</h1></article>
        <article className="nav-part-2-row" ><img className="nav-icon" onClick={() => navigate("/Cart")} src={cart} alt="Cart" /> <h1>Cart</h1></article>
        <article className="nav-part-2-row"><img className="nav-icon" onClick={() => navigate("/dinein")} src={dine} alt="Dine In" /> <h1>Dine-in</h1></article>
        
        
        {< article className="nav-part-2-row logout-row" onClick={handleAuthClick}>
          <img className="nav-icon" src={log} alt={isAuthenticated ? "Logout" : "Login"} />
          <h1>{isAuthenticated ? "Logout" : "Login"}</h1>
        </article> }
      
      
      </article>

      <article className="nav-part-3" >
      {user && <p>Hello, {user.username}</p>}
      <article className=" nav-part-2-row logout-row " onClick={handleAuthClick}>
          <h1>{isAuthenticated ? "Logout" : "Log In"}</h1>
        </article>
        <img  src={log} alt={isAuthenticated ? "Logout":"Log In"}/>
      </article> */}
      <article className={`nav-part-2 ${isMobileMenuOpen ? "open" : ""}`}>
  <article className="nav-part-2-row" onClick={() => navigate("/categories")}>
    <img className="nav-icon" src={food} alt="Food" />
    <h1>Food</h1>
  </article>

  <article className="nav-part-2-row" onClick={() => navigate("/Cart")}>
    <img className="nav-icon" src={cart} alt="Cart" />
    <h1>Cart</h1>
  </article>

  <article className="nav-part-2-row" onClick={() => navigate("/dinein")}>
    <img className="nav-icon" src={dine} alt="Dine In" />
    <h1>Dine-in</h1>
  </article>

  {/* 🔻 Visible ONLY on mobile/tablet (hidden on desktop) */}
  <article className="nav-part-2-row logout-row" onClick={handleAuthClick}>
    <img className="nav-icon" src={log} alt={isAuthenticated ? "Logout" : "Login"} />
    <h1>{isAuthenticated ? "Logout" : "Login"}</h1>
  </article>
</article>

{/* 🔺 Visible ONLY on desktop (hidden on mobile) */}
<article className="nav-part-3" onClick={handleAuthClick}>
  {user && <p style={{ color: "yellow" }}>Hello, {user.username}</p>}
  <h1 style={{ color: "red", fontWeight: "bold" }}>{isAuthenticated ? "Logout" : "Login"}</h1>
  <img src={log} alt={isAuthenticated ? "Logout" : "Login"} />
</article>

    </section>
  );
}

export default Navbar;
