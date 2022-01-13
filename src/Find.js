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
            defaultValue={props.currentAd?.sFullname}
            name="sFullname"
            disabled={disabled}
            placeholder="Participant full name"
        />
        <br />
        Email: <br />
        <input
            type="text"
            defaultValue={props.currentAd?.sEmail}
            name="sEmail"
            disabled={disabled}
            placeholder="Participant Email"
        />
        <br />
        <br/>
        <Button className="buttonSubmit" size="sm" type="submit" disabled={disabled}>
            {" "}
            Search{" "}
        </Button>
    </form>
    </Container>
    </>
);
}

export default Find