import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SApp'
import Button from '@mui/material/Button';
import Add from "./Add";
import Find from "./Find";
//import Button from 'react-bootstrap/Button';
import Profcard from './Profcard';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Tracker from "./Tracker";


//mport Table from 'react-bootstrap/Table';
function AdminDashboard(props) {
  const [profileForms, cProfileForms] = useState([]);

  const [current, cCurrent] = useState(undefined);
  const [show,setShow]=useState(false)
  const [show2,setShow2]=useState(false)
  const [ashow2,asetShow2]=useState(false)

  const refreshList = () => {
    props.client.getProfileForms().then((response) => cProfileForms(response.data));
  };
  const removeProfileForm = (id) => {
    props.client.removeProfileForm(id).then(() => refreshList());
  
  };
  const updateProfileForm= (id) => {
    let e=profileForms.filter((profileForm)=>{return profileForm._id == id});
   if(e.length>0){
    cCurrent(e[0])
   }
  };
  const querySearch = (searchParams) => {
    props.client.queryResult(searchParams).then((response) => cProfileForms(response.data))
  }

  useEffect(() => {
    refreshList();
  }, []);
  
  function buildcards() {
    return profileForms.map((current) => {
      return (
        <>
          <Profcard id={current._id} firstname={current.firstname} lastname={current.lastname} email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} admincomments={current.admincomments} portfolio={current.portfolio} hired={current.hired?"true":"false"} skills={current.skills} picture={current.picture} course={current.course} date={current.date} cv={current.cv} removeProfileForm={removeProfileForm} updateProfileForm={updateProfileForm}></Profcard>
        </>


      );
    });
  }
    return (

      <main>
        <Container className="contentContainer">
          <Row className="headerRow">
            <h5 className="header-title">Admin Dashboard</h5>
            <h4>Logged in as {props.username}</h4>
          </Row>
    
      <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
      <Button  variant="contained" color="primary" onClick={props.logout}>
          {" "}
          Logout{" "}
        </Button>
      </div>

        <br />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {buildcards()}
        </div>
     <Row className="bodyRow mx-auto text-center mt-2">
      <Col xs={6}>
      { show?
      <>
      <Add
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentProfileForm={current}
        logout={props.logout}
      />
      <a class="buttonSignUp"onClick={() => setShow(!show)}>See less</a>
      </>
      : <a class="buttonSignUp" onClick={() => setShow(!show)}>Add/Update post</a> }
      </Col>
      <Col xs={6}>
        { show2? 
          <>
        <Find
            client={props.client}
            querySearch = {querySearch}
            currentProfileForm={current}
          />
          <a class="buttonSignUp" onClick={() => setShow2(!show2)}>See less</a>
          <a class="buttonSignUp" onClick={() => refreshList()}>Clear Filtered List</a>
          </>
        :<a class="buttonSignUp" onClick={() => setShow2(!show2)}>Find Participant</a> }
        </Col>
        </Row>
        <Row>
          <Col>
          <Tracker/>
          </Col>
        </Row>
        </Container>
        
      </main>

  );
  
}
export default AdminDashboard;