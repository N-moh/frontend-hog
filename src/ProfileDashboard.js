import React, { useState, useEffect } from "react";
import Add from "./Add";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//mport Table from 'react-bootstrap/Table';
function ProfileDashboard(props) {
  const [profileForms, cProfileForms] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const refreshList = () => {
    props.client.getProfileForms().then((response) => cProfileForms(response.data));
  };
  const removeProfileForm = (id) => {
    props.client.removeProfileForm(id).then(() => refreshList());
  };
  const updateProfileForm= (profileForm) => {
    cCurrent(profileForm);
  };
  useEffect(() => {
    refreshList();
  }, []);
  
  const buildrows = () => {
    return profileForms.map((current) => {    
  
  
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
    <br/>
      <h3>Dashboard
      </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
      <Button  onClick={props.logout}>
          {" "}
          Logout{" "}
        </Button>
      </div>
      <Card key={current._id}  className = "cards">
      
        <Card.Img variant="top" src="pic1.jpg" />
        <Card.Body >
          <Card.Title > {current.fullname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          {current.email}
          </Card.Subtitle>
          
          <Card.Text> {current.bio}  </Card.Text>
          <Button variant="danger" size="sm" onClick={() => removeProfileForm(current._id)}> remove</Button>
            <Button variant="success" size="sm" onClick={() => updateProfileForm(current)}> update</Button>
            {buildrows()}
        </Card.Body>
      </Card>
      

      <Add
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentProfileForm={current}
        logout={props.logout}
      />
     {/*<Showevents/>*/}
    </>
  );
  
}
export default ProfileDashboard;