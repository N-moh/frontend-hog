import React, { useState, useEffect } from "react";
import Add from "./Add";
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';

import Table from 'react-bootstrap/Table';
function Dashboard(props) {
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
        <tr key={current._id}>
          {/*<td>{current.date}</td>*/}
          <td>{current.name}</td>
          <td>{current.lastname}</td>
          <td>{current.email}</td>
          <td>{current.bio}</td>
          {/*<td> <Moment format="DD MMM yyyy" >{current.date}</Moment></td>
          <td>{current.time}</td>          
      <td>{current.covidPass?"true":"false"} </td>*/}

          <td>
            <Button variant="danger" size="sm" onClick={() => removeProfileForm(current._id)}> remove</Button>
            <Button variant="success" size="sm" onClick={() => updateProfileForm(current)}> update</Button>
          </td>
        </tr>
      );
    });
  };
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
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      
            <th>Email</th>
            <th>Bio</th>
            
    </tr>
  </thead>
  <tbody>
  {buildrows()}
  </tbody>
</Table>
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
export default Dashboard;