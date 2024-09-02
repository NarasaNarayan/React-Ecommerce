import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar = () => {
const [menu,Setmenu]=useState('Shop')
  return <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <Link className="navbar-brand mx-5" to="/"><img src={logo} alt=""/>SHOPPER</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  ">
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" onClick={()=>Setmenu('Shop')}  to="/"  >Shop {menu==='Shop'? <hr/>:<></>}</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" onClick={()=>Setmenu('Men')} to="/mens">Men {menu==='Men'? <hr/>:<></>}</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" onClick={()=>Setmenu('Women')}  to="/womens">Women {menu==='Women'? <hr/>:<></>}</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" onClick={()=>Setmenu('Kids')}  to="/kids">Kids {menu==='Kids'? <hr/>:<></>}</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active " aria-current="page" to="/login"><button className="login">Login</button></Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/cart"><img src={cart} alt="" style={{width: '50px', height:'50px'}}/><sup className="cartlenth fs-5 px-2 bg-danger text-white">0</sup></Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
  </div>;
};

export default Navbar;
