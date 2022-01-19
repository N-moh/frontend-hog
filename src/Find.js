import React, { useState } from "react";
import { Container } from "react-bootstrap";
import './App.css';
import { Button } from "react-bootstrap";


function Find(props) {
    const [disabled, cDisabled] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
            const searchParams = { 
                sFullname: e.target.sFullname.value,
                sEmail: e.target.sEmail.value,
                sCourse: e.target.sCourse.value,
                dateMin: e.target.dateMin.value,
                dateMax: e.target.dateMax.value
            }
            props.querySearch(searchParams)
    };
    return (
    <>
    <Container className="mx-auto formContainer">
        <h5 className="findHeader">Searching for...</h5>
        <br />
        <form className="form2" onSubmit={(e) => submitHandler(e)} id="findForm">
        Fullname: <br />
        <input
            type="text"
            defaultValue={props.currentProfileForm?.sFullname}
            name="sFullname"
            disabled={disabled}
            placeholder="Participant full name"
        />
        <br />
        Email: <br />
        <input
            type="text"
            defaultValue={props.currentProfileForm?.sEmail}
            name="sEmail"
            disabled={disabled}
            placeholder="Participant Email"
        />
        Course: <br />
        <input
            type="text"
            defaultValue={props.currentProfileForm?.sCourse}
            name="sCourse"
            disabled={disabled}
            placeholder="Participant Course"
        />
        <br />
        First date: <br />
        <input
            type="date"
            defaultValue={props.currentProfileForm?.date}
            name="dateMin"
            disabled={disabled}
        />
        <br/>
        Last date: <br />
        <input
            type="date"
            defaultValue={props.currentProfileForm?.date}
            name="dateMax"
            disabled={disabled}
        />
        <br/>
        <Button  size="sm" type="submit" disabled={disabled}>
            {" "}
            Search{" "}
        </Button>
    </form>
    </Container>
    </>
);
}

export default Find