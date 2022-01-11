import React, { useState, useEffect } from "react";
import Add from "./Add";
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';

import Table from 'react-bootstrap/Table';
function Dashboard(props) {
  const [evts, cEvts] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const refreshList = () => {
    props.client.getEvts().then((response) => cEvts(response.data));
  };
  const removeEvt = (id) => {
    props.client.removeEvt(id).then(() => refreshList());
  };
  const updateEvt= (evt) => {
    cCurrent(evt);
  };
  useEffect(() => {
    refreshList();
  }, []);
  const buildrows = () => {
    return evts.map((current) => {
      return (
        <tr key={current._id}>
          {/*<td>{current.date}</td>*/}
          <td>{current.name}</td>
          <td>{current.place}</td>
          <td>{current.description}</td>
          <td> <Moment format="DD MMM yyyy" >{current.date}</Moment></td>
          <td>{current.time}</td>          
          <td>{current.covidPass?"true":"false"} </td>

          <td>
            <Button variant="danger" size="sm" onClick={() => removeEvt(current._id)}> remove</Button>
            <Button variant="success" size="sm" onClick={() => updateEvt(current)}> update</Button>
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
      <th>Event Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Date</th>
            <th>Time</th>
            <th>covidPass</th>
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
        currentEvt={current}
        logout={props.logout}
      />
     {/*<Showevents/>*/}
    </>
  );
}
export default Dashboard;