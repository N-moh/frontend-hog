import React, { useState, useEffect } from "react";
import Add from "./Add";
import Button from 'react-bootstrap/Button';
import Find from "./Find";
import { Col } from "react-bootstrap";


import Table from 'react-bootstrap/Table';
function Dashboard(props) {
  const [profileForms, cProfileForms] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [show2,setShow2]=useState(false)
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
  const querySearch = (searchParams) => {
    props.client.queryResult(searchParams).then((response) => cProfileForms(response.data))
  }
  const buildrows = () => {
    return profileForms.map((current) => {
      return (
        <tr key={current._id}>
          {/*<td>{current.date}</td>*/}
         
          <td>{current.fullname}</td>
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
            <th>Full Name</th>       
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
      <Col xs={6}>
        { show2? 
          <>
        <Find
            client={props.client}
            querySearch = {querySearch}
            currentAd={current}
          />
          <a class="see-less-btn" onClick={() => setShow2(!show2)}>See less</a>
          <a class="see-less-btn" onClick={() => refreshList()}>Clear Filtered List</a>
          </>
        :<a class="buttonShowAdd2" onClick={() => setShow2(!show2)}>Find Event</a> }
        </Col>
     {/*<Showevents/>*/}
    </>
  );
}
export default Dashboard;