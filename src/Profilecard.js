import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Moment from "react-moment";



function Profilecard(props){
    const [show,setShow]=useState(false)
console.log(Profilecard)

    return (
        <>
        
            
            

            <Card id="main"className="Card "  style={{ width: '18rem' }} >
                <Card.Body >

                 <Card.Img  className="mh-10 mw-10 img-thumbnail hover-shadow"  src={props.picture} alt="" />
                    <Card.Text><h3> {props.fullname}</h3></Card.Text>

                    <Card.Link href={"mailto:"+props.email}> <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon></Card.Link>
                    
                   {/*} <ul class="flex flex-col items-center justify-center list-inline  list-unstyled  font-small mb-5">
      <li><a href="#"><i><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></i></a></li>
      <li><a href="#"><i><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></i></a></li>
      <li><a href="#"><i ></i><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></a></li>
      <li><a href="#"><i></i><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></a></li>
    </ul>*/}
    <Card.Link target="_blank" href={props.github}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link>
    <Card.Link target="_blank" href={props.linkedin}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></Card.Link>
    <Card.Link target="_blank" href= {props.portfolio}><FontAwesomeIcon icon = {faPortrait}></FontAwesomeIcon></Card.Link>
    <br/>

    
                    { show?
                    <>
                    <Card.Text>Bio: {props.bio} </Card.Text>
                    <Card.Text>{props.cv}</Card.Text>
                    <Card.Text>Hired: {props.hired}</Card.Text>
                    <Card.Text>Course: {props.course}</Card.Text>
                    <Card.Text>Date:<Moment format="DD MMM yyyy" >{props.date}</Moment></Card.Text>
                    <Button class="see-less-btn" size="sm" onClick={() => setShow(!show)}>See less</Button>
                    <br />
                    <br/>
                    
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