import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

//import Moment from "react-moment";



function Profilecard(props){
    const [show,setShow]=useState(false)
console.log(Profilecard)

    return (
        <>
        
            
            
            <Card id="main"className=" m-5 "  style={{ width: '20rem' ,backgroundColor:'lightgrey'}} >
                <Card.Body >
                 <Card.Title></Card.Title>
                 <Card.Img  className="mh-10 mw-10 img-thumbnail grey lighten-4  hover-shadow" src={props.picture} alt="" />
                    <Card.Text><h4> {props.fullname}</h4></Card.Text>
                    <Card.Text>Email: {props.email}</Card.Text>
                    { show?
                    <>
                    <Card.Text>Bio: {props.bio} </Card.Text>
                    <Card.Text>{props.linkedin}</Card.Text>
                    <Card.Text>{props.github}</Card.Text>
                    <Card.Text>{props.portfolio}</Card.Text>
                    <Card.Text>{props.cv}</Card.Text>
                    <a class="see-less-btn" onClick={() => setShow(!show)}>See less</a><br/>
                    <Button variant="danger" size="sm" onClick={() => props.removeProfileForm(props.id)}> remove</Button>
                    <Button variant="success" size="sm" onClick={() => props.updateProfileForm(props.id)}> update</Button>
                    </> :<a class="see-more-btn" onClick={() => setShow(!show)}>See more</a>
                    }
                    <br />

                </Card.Body>
            </Card>

     
         
      
        
        </>
    )




}

export default Profilecard;