import 'bootstrap/dist/css/bootstrap.css';
import React,{ useState } from 'react';
import { Form, Row, Col } from "react-bootstrap";
//import { postImage } from './Api';
import Button from '@mui/material/Button';


export default function Upload(props) {
  
  const [selectedFile,changeSelectedFile] = useState();

  const upload = (e) => {
    console.log("Upload")
    e.preventDefault()
  }

  const changeHandler = (event) => {
    changeSelectedFile(event.target.files[0]);
  }

  const submitFile = () => {
    props.client.postImage('tom',selectedFile)
    .then((res) => {
    console.log(res)
    props.changePicture(res.data.link);
    })
  } 
  

  return (
    <>
    <Row>
      <Form.Group onSubmit={upload}>
      <Col md="auto">
      <Form.Control type="file" name="myFile" onChange={changeHandler} ></Form.Control>
      </Col>
      <Col md="auto">
      <Button variant="contained" color="primary" size="small" onClick={submitFile} >Upload</Button>
      </Col>
      </Form.Group>
    </Row>
    </>
  )

}