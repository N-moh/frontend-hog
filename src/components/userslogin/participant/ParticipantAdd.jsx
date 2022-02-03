import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Upload from "./Upload";
import CvUpload from "./cvUpload";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
//import { colourOptions } from '../data';




function ParticipantAdd(props) {
  const [disabled, cDisabled] = useState(false);
  const[picture,cPicture]=useState('' || props.picture)
  const[cv,cCV]=useState('' || props.cv)
  const[skills,cSkills]=useState([])

  const skillOptions = [
    { value: 'JavaScript,', label: 'JavaScript' },
    { value: 'Html,', label: 'Html' },
    { value: 'Css,', label: 'Css' },
    { value: 'React', label: 'React' }
   ]
const animatedComponents = makeAnimated();

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    console.log("skills", skills.map( (item) => { return(item.value)}))
    let result;
    
      
      result = props.client.updateParticipantForm(
        
        props.currentProfileForm._id,
        props.username,
        e.target.firstname.value,
        e.target.lastname.value,
        e.target.email.value,
        e.target.bio.value,
        e.target.linkedin.value,
        e.target.github.value,
        e.target.portfolio.value,
        picture,
        e.target.hired.checked,
        e.target.course.value,
        skills.map( (item) => { return(item.value)}),
        e.target.date.value,
        cv
        
      );
    
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
    <h3> Update your profile </h3>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      
      <br />
      <Form onSubmit={(e) => submitHandler(e)} id="addForm">
     <Row className="g-2">
      <Col md>
      <Form.Group>
      <Form.Label >First Name:</Form.Label> <br />
        <Form.Control
          required
          type="text"
          defaultValue={props.currentProfileForm?.firstname || ""}
          name="firstname"
          disabled={disabled}
          placeholder="Your first name here"
        />
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group>
        <Form.Label >Last Name:</Form.Label> <br />
        <Form.Control
          required
          type="text"
          defaultValue={props.currentProfileForm?.lastname || ""}
          name="lastname"
          disabled={disabled}
          placeholder="Your last name here"
        />
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col md>
        <Form.Group>
        <Form.Label>Email </Form.Label><br />
        <Form.Control
          required
          type="text"
          defaultValue={props.currentProfileForm?.email || ""}
          name="email"
          disabled={disabled}
          placeholder="Type your email here">
        </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          type="text"
          defaultValue={props.currentProfileForm?.bio || ""}
          name="bio"
          disabled={disabled}>
        </Form.Control>
        </Form.Group>
        </Row>
        <Row>
          <Col md>
        <Form.Group>
        <Form.Label>Linkedin</Form.Label>
        <Form.Control
          type="text"
          defaultValue={props.currentProfileForm?.linkedin || ""}
          name="linkedin"
          disabled={disabled}>
            </Form.Control>
          </Form.Group>
          </Col>
          <Col md>
        <Form.Group>
        <Form.Label>Github</Form.Label>
        <Form.Control
          type="text"
          defaultValue={props.currentProfileForm?.github || ""}
          name="github"
          disabled={disabled}>
        </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Form.Group>
        <Form.Label> Portfolio</Form.Label>
        <Form.Control
          type="text"
          defaultValue={props.currentProfileForm?.portfolio || ""}
          name="portfolio"
          disabled={disabled}>
        </Form.Control>
        </Form.Group>
        </Row>
        <Row>
        <Col md>
        <Form.Group>
        <Form.Label>Hired</Form.Label>
        <Form.Check
          type="switch"
          defaultChecked={props.currentProfileForm?.hired || ""}
          name="hired"
          disabled={disabled}/>  
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col md>
          
        
        </Col>
      
        </Row>
        
        <Row>
          <Col md>
        <Form.Group>
        <Form.Label>Course</Form.Label>
        <Form.Select
        id= "course" name="course">
        <option value="">Please select a course</option>
        <option value="Sheffield Council 12 week Bootcamp">Sheffield Council 12 week Bootcamp</option>
        <option value="Part-Time Software Development Bootcamp">Part-Time Software Development Bootcamp</option>
        <option value="Part-Time Data Science Bootcamp">Part-Time Data Science Bootcamp</option>
        </Form.Select>
        </Form.Group>
        </Col>
        <Col md>
        <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          defaultValue={props.currentProfileForm?.date}
          name="date"
          disabled={disabled}>
        </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        
        <Form.Group>
        <Form.Label>Picture</Form.Label>
        <Upload client={props.client} changePicture={cPicture}/>
        </Form.Group>
        <br/>
        <Form.Group>
        <Form.Label>CV</Form.Label>
        <CvUpload client={props.client} changeCv={cCV}/>
        </Form.Group>
        <br/>

        <Form.Group className="findSelectForm" >
        
        <Form.Label>Skills</Form.Label>
        
        
        <Select
          className="findSelect" 
          onChange={(e)=>{cSkills(e)}}
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={props.skills}
          isMulti
          options={skillOptions}
          name="skills">
          </Select>
        
        </Form.Group>
        <br/>
        <Button size="sm"type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </Button>
        
      </Form>
      </div>
    </>
  );
}
export default ParticipantAdd;