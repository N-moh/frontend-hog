import "./menu.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
      <Link to="intro">  
        <li onClick={()=>setMenuOpen(false)}>
          intro
          </li>
          </Link>
          <Link to="dashboard">  
        <li onClick={()=>setMenuOpen(false)}>
          dashboard
          </li>
          </Link>
   
       
        <Link to="contact"> 
                
     
        <li onClick={()=>setMenuOpen(false)}>
          contact
        </li>
        </Link>
      </ul>
    </div>
  );
}