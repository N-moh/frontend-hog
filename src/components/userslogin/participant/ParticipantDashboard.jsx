import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SApp'
import ParticipantAdd from "./ParticipantAdd";
import Button from '@mui/material/Button';
import ParticipantCard from './ParticipantCard';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
//import MultiSelectSkills from "./MultiSelectSkills";


//mport Table from 'react-bootstrap/Table';
  function ParticipantDashboard(props) {
  const [profileForms, cProfileForms] = useState([]);
  const [current, cCurrent] = useState(undefined);
  
  const id = props.post
  const refreshList = () => {
    console.log(id);
  props.client.getProfileForm(id).then((response) => cProfileForms([response.data]));
  };
  const updateProfileForm= (id) => {
    let e=profileForms.filter((profileForm)=>{return profileForm._id == id});
    if(e.length>0){
    cCurrent(e[0])
    }
  };

  useEffect(() => {
    refreshList();
  }, []);
  
  function buildcards() {
    return profileForms.map((current) => {
      return (
        <>
          <ParticipantCard id={current._id} firstname={current.firstname} lastname={current.lastname}  email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} portfolio={current.portfolio} picture={current.picture} course={current.course} date={current.date} skills={current.skills} hired={current.hired?"true":"false"} cv={current.cv} updateProfileForm={updateProfileForm}></ParticipantCard>
        </>
      );
    });
  }
  useEffect(() =>
  {buildcards()}, [])
  return (
    <main>
      <Container className="contentContainer">
      
        <Row className="headerRow">
          <h5 className="header-title">Participants Dashboard</h5>
          <h4>Logged in as {props.username}</h4>
        </Row>
      <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
      <Button variant="contained" color="primary" onClick={props.logout}>
          {" "}
          Logout{" "}
        </Button>
      </div>
      <br />
      <Row className="bodyRow mx-auto text-center mt-2">
      <Col xs={6}>
        {buildcards()}
      </Col>
      <Col xs={6}>
      <ParticipantAdd
      username={props.username}
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentProfileForm={current}
        logout={props.logout}
      />
      </Col>
      </Row>
      </Container>
    </main>

  );
  
}
export default ParticipantDashboard;