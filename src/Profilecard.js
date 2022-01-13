import React from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

//import Moment from "react-moment";



function Profilecard(props){
console.log(Profilecard)

    return (
        <>
        
            
            
            <Card id="main"className=" m-5 "  style={{ width: '20rem' }} >
                <Card.Body >
                 <Card.Title>Profile</Card.Title>
                    <p>Name: {props.fullname} </p>
                    <p>Email: {props.email}  </p>
                    <p>Bio: {props.bio}  </p>
                    
                    <Button variant="danger" size="sm" onClick={() => props.removeProfileForm(props.id)}> remove</Button>
            <Button variant="success" size="sm" onClick={() => props.updateProfileForm(props.id)}> update</Button>
                </Card.Body>
            </Card>

     
         
      
        
        </>
    )




}

export default Profilecard;