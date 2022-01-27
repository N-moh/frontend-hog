import "./topbar.scss";
import { Mail } from "@material-ui/icons";
import React from "react";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            The Developer Academy
          </a>
         {/* <div className="itemContainer">
            <Person className="icon" />
            <span>+44 924 12 74</span>
          </div>*/}
          <div className="itemContainer">
            <Mail className="icon" />
            <span>info@thedeveloperacademy.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}