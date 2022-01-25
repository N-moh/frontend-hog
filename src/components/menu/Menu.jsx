import "./menu.scss";
import React from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#login">Login</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#jobs">Job board</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Success stories</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}