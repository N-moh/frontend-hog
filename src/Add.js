import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Add(props) {
  const [disabled, cDisabled] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentEvt) {
      result = props.client.updateEvt(
        props.currentEvt._id,
        e.target.evtName.value,
        e.target.place.value,
        e.target.description.value,
        e.target.date.value,
        e.target.time.value,
        e.target.covidPass.checked
        
      );
    } else {
      result = props.client.addEvt(//e.target.evtDate.value,
        e.target.evtName.value, e.target.place.value,e.target.description.value, e.target.date.value, e.target.time.value, e.target.covidPass.checked );
    }
    result
      .then(() => {
        cDisabled(false);
        document.getElementById("addForm").reset();
        props.refreshList();
      })
      .catch(() => {
        alert("an error occured, please try again");
        cDisabled(false);
      });
  };
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
    {props.currentEvt? "Update Event" : "Add Event"}
    </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
       <br />
      <Form onSubmit={(e) => submitHandler(e)} id="addForm">
        {/*Date: <br />
        <input
          type="text"
          defaultValue={props.currentEvt?.date}
          name="evtDate"
          disabled={disabled}
        />*/}
        Event Name: <br />
        <input
         required
          type="text"
          defaultValue={props.currentEvt?.name}
          name="evtName"
          disabled={disabled}
        />
        <br />
        Location: <br />
        <input
           required
          type="text"
          defaultValue={props.currentEvt?.place}
          name="place"
          disabled={disabled}
        /><br/>
        Description
        <br />
        <input
          required
          type="text"
          defaultValue={props.currentEvt?.description}
          name="description"
          disabled={disabled}
          /><br/>
        Date
        <br />
        <input
           type="date"
          defaultValue={props.currentEvt?.date}
          name="date"
          disabled={disabled}
        /><br/>
       {/* <div>
        <DatePicker
          selected={props.date}
          />
       </div>*/}
        Time
        <br/>
        <input
         required
          type="text"
          defaultValue={props.currentEvt?.time}
          name="time"
          disabled={disabled}
        />
        <br/>
        covidPass
        <br/>
        <input
          type="checkbox"
          defaultChecked={props.currentEvt?.covidPass}
          name="covidPass"
          disabled={disabled}
        />
        <br />
        <Button size="sm"type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </Button>
      </Form>
      </div>
    </>
  );
}
export default Add;