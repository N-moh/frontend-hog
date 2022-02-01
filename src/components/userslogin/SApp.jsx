import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import { ApiClient } from "./apiClient";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpDashboard from "./EmpDashboard";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Signup from "../signup/Signup";
//import { NavLink } from "react-bootstrap";
//import ValidationTextFields from "../../ValidationTextFields";

import ParticipantDashboard from "./ParticipantDashboard";



function SApp() {
  const [token,changeToken] = useState(window.localStorage.getItem("token"))
  const [post,changePost]= useState(window.localStorage.getItem("post"))
  const [role,changeRole] = useState(window.localStorage.getItem("role"))
  const [username,changeUsername] = useState(window.localStorage.getItem("username"))
  const client = new ApiClient(
    token,
    role,
    username,
    post,
    () => logout()
  );
  const login = (newToken,newRole,newUsername,newPost) => {

    window.localStorage.setItem("token",newToken);
    window.localStorage.setItem("role",newRole);
    window.localStorage.setItem("username",newUsername);
    window.localStorage.setItem("post",newPost);
    changeToken(newToken);
    changeRole(newRole);
    changeUsername(newUsername);
    changePost(newPost);
  }
  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("role");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("post");
    
    changeToken(undefined);
    changeRole("");
    changeUsername("");
    changePost("");

  }
  return (
    <>
    <Navbar bg="secondary alert" variant="dark">
      
      <Navbar.Toggle aria-controls="basic-nav-nav"></Navbar.Toggle>
      <Navbar.Collapse className="nav-link">
        <Nav>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
    
      {token ? (
        role=="admin" 
        ? <AdminDashboard client={client} username={username} logout={logout}/> 
        : role=="employer"
        ? <EmpDashboard client={client} username={username}  logout={logout}/>
        : role=="participant"
        ? <ParticipantDashboard client={client} post={post} username={username}  logout={logout}/>
        : <></>
      ) : (
        <>
        <Login loggedIn={(token,role,username,post) => login(token,role,username,post)} client={client} logout={logout}/>
        <Signup client={client}/>
        </>
      )

      }
    </>
    
  );
  
}
export default SApp;
