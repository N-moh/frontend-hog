import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import Moment from "react-moment";



function SProfilecard(props){
    const [show,setShow]=useState(false)


    return (
        <>
        
            
            

            <Card id="main"className="Card "  style={{ width: '14rem' }} >
                <Card.Body >
                <Card.Img  className="mh-10 mw-10 hover-shadow cardImg"  src={props.picture} alt="" />
                <Card.Text><h3> {props.fullname}</h3></Card.Text>
                <Card.Link href="mailto:">{props.email}</Card.Link><br/>
                <Card.Link target="_blank" href={props.github}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link>
                <Card.Link target="_blank" href={props.linkedin}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link>
                <Card.Link href="#"><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link>
                <Card.Link href="#"><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link><br/>
                    { show?
                    <>
                    <Card.Text>Bio: {props.bio} </Card.Text>
                    <Card.Text>{props.linkedin}</Card.Text>
                    <Card.Text>{props.github}</Card.Text>
                    <Card.Text>{props.portfolio}</Card.Text>
                    <Card.Text>{props.cv}</Card.Text>
                    <Card.Text>Hired: {props.hired}</Card.Text>
                    <Card.Text>Course: {props.course}</Card.Text>
                    <Card.Text>Start date:<Moment format="DD MMM yyyy" >{props.date}</Moment></Card.Text>
                    <Button class="see-less-btn" onClick={() => setShow(!show)}>See less</Button>
                    <br />
                    <br />
                    </> 
                    :<a class="see-more-btn" onClick={() => setShow(!show)}>See more</a>
                    }
                    <br />
                </Card.Body>
            </Card>
        </>
    )




}

export default SProfilecard;