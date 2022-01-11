import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Showevents from "./Showevents";
//import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";
function App() {
  const [token,changeToken] = useState(window.localStorage.getItem("token"));
  const client = new ApiClient(
    token,
    () => logout()
  );
  const login = (newToken) => {
    window.localStorage.setItem("token",newToken);
    changeToken(newToken);
  }
  const logout = () => {
    window.localStorage.removeItem("token");
    changeToken(undefined);
  }
  return (
    <>
    <Navbar bg="primary" variant="dark">
   <Navbar.Brand><h2>EventsApp</h2></Navbar.Brand>
   {/*<Navbar.Toggle aria-controls="basic-nav-nav"></Navbar.Toggle>
   <Navbar.Collapse className="nav-link">
     <Nav>
     <NavLink className="nav-link" to="/">
         Home
       </NavLink>
       <NavLink className="nav-link" to="/view">
         Events
       </NavLink>
       <NavLink className="nav-link" to="/">
         Login
       </NavLink>
     </Nav>
  </Navbar.Collapse>*/}
 </Navbar>
    
      {token ? (
        <Dashboard client={client}  logout={logout}/>
      ) : (
        <Login loggedIn={(token) => login(token)} client={client} logout={logout}/>
      )
      }
      {/*<Showevents/>*/}
    </>
  );
}
export default App;