import "./menu.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
      
      <Link to="intro">  
        <li classnaonClick={()=>setMenuOpen(false)}>
          Home
          </li>
          </Link>
          <Link to="dashboard">  
        <li onClick={()=>setMenuOpen(false)}>
          Dashboard
          </li>
          </Link>
   
       
        <Link to="contact"> 
                
     
        <li onClick={()=>setMenuOpen(false)}>
          Contact
        </li>
        </Link>
      </ul>
    </div>
  );
}