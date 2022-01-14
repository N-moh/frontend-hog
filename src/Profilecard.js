import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App'
import Button from "react-bootstrap/Button";

//import Moment from "react-moment";



function Profilecard(props){
    const [show,setShow]=useState(false)
console.log(Profilecard)

    return (
        <>
        
            
            

            <Card id="main"className="Card "  style={{ width: '18rem' }} >
                <Card.Body >

                 <Card.Img  className="mh-10 mw-10 img-thumbnail hover-shadow" src={props.picture} alt="" />
                    <Card.Text><h3> {props.fullname}</h3></Card.Text>

                    <Card.Text>Email: {props.email}</Card.Text>
                    { show?
                    <>
                    <Card.Text>Bio: {props.bio} </Card.Text>
                    <Card.Text>{props.linkedin}</Card.Text>
                    <Card.Text>{props.github}</Card.Text>
                    <Card.Text>{props.portfolio}</Card.Text>
                    <Card.Text>{props.cv}</Card.Text>
                    <Card.Text>Hired: {props.hired}</Card.Text>
                    <a class="see-less-btn" onClick={() => setShow(!show)}>See less</a>
                    <br />
                    <br />
                    <Button variant="success" size="sm" onClick={() => props.updateProfileForm(props.id)}> update</Button>
                    <Button variant="danger" size="sm" onClick={() => props.removeProfileForm(props.id)}> remove</Button>
                    </> 
                    :<a class="see-more-btn" onClick={() => setShow(!show)}>See more</a>


                    }
                    <br />

                </Card.Body>
            </Card>

     
         
      
        
        </>
    )




}

export default Profilecard;