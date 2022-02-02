import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import { ApiClient } from "./apiClient";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EmpDashboard from "./EmpDashboard";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Signup from "../signup/Signup";
import ParticipantDashboard from "./ParticipantDashboard";
import { Col, Container, Row } from "react-bootstrap";



function SApp() {
  const [token,changeToken] = useState(window.localStorage.getItem("token"))
  const [post,changePost]= useState(window.localStorage.getItem("post"))
  const [role,changeRole] = useState(window.localStorage.getItem("role"))
  const [username,changeUsername] = useState(window.localStorage.getItem("username"))
  const [show,setShow]=useState(false)
  const [show2,setShow2]=useState(false)
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
    changeUsername(newUsername);
    changePost(newPost);
    changeRole(newRole);
    
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
        <Container className="loginContainer">
          <Row className="signupRow">
            <Col>
            { show?
            <>
            <Col>
              <Login loggedIn={(token,role,username,post) => login(token,role,username,post)} client={client} logout={logout}/>
              <a class="buttonSignUp" onClick={() => setShow(!show)}>Don't actually have an account?</a>
            </Col>
            </>
            : <a class="buttonSignUp" onClick={() => setShow(!show)}>Already have an account?</a> }
            </Col>
            <Col>
            { show2?
            <>
            <Col>
              <Signup client={client}/>
              <a class="buttonSignUp" onClick={() => setShow2(!show2)}>Just registered?</a>
            </Col>
            </>
            : <a class="buttonSignUp" onClick={() => setShow2(!show2)}>Register here</a> }
            </Col>
          </Row>
        </Container>
      )

      }
    </>
    
  );
  
}
export default SApp;
