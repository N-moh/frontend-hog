import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SApp'
import Button from "react-bootstrap/Button";
import IconButton from '@mui/material/IconButton'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
//import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Moment from "react-moment";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';


function SProfilecard(props){
    const [show,setShow]=useState(false)


    return (
        <>
        
            
            

            <Card id="main"className="Card "  style={{ width: '14rem' }} >
                <Card.Body >
                <Card.Img  className="mh-10 mw-10 hover-shadow cardImg"  src={props.picture} alt="" />
                <Card.Text><h3> {props.firstname} {props.lastname}</h3></Card.Text>
                <Card.Text>{props.bio}</Card.Text>
                <IconButton aria-label="Email" href={"mailto:"+props.email} >
          <EmailIcon />
        </IconButton>
        <IconButton aria-label="Github" target="_blank" href={props.github}>
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="Linkedin"  target="_blank" href={props.linkedin}>
          <LinkedInIcon/>
        </IconButton>
        <IconButton aria-label="Portfolio" target="_blank" href= {props.portfolio}>  
          <PersonIcon />
        </IconButton>
        

                {/*<Card.Link href={"mailto:"+props.email}> <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon></Card.Link>
                <Card.Link target="_blank" href={props.github}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link>
                <Card.Link target="_blank" href={props.linkedin}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></Card.Link>
    <Card.Link target="_blank" href= {props.portfolio}><FontAwesomeIcon icon = {faPortrait}></FontAwesomeIcon></Card.Link>*/}
                <br />
                    { show?
                    <>
                    <Card.Text>{props.cv}</Card.Text>
                    <Card.Text>Hired: {props.hired}</Card.Text>
                    <Card.Text>Course: {props.course}</Card.Text>
                    <Card.Text>Skills: {props.skills}</Card.Text>
                    <Card.Text>
                   CV
                   <IconButton aria-label="Download" target="_blank" href={props.cv} >
                   <DownloadIcon />
                  </IconButton>
                   </Card.Text>
                    <Card.Text>Start date:<Moment format="DD MMM yyyy" > {props.date}</Moment></Card.Text>
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