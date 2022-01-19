

import 'bootstrap/dist/css/bootstrap.css';
import React,{ useState } from 'react';
import { Table, Button, Form, Row, Col } from "react-bootstrap";
//import { postImage } from './Api';


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
    props.client.postImage('colin',selectedFile)
    props.changePicture("http://localhost:3001/user/new/uploads")
    console.log(selectedFile.name)
  }

  return (
   
    
    <>
    
      <Form onSubmit={upload}>
      <h1>Upload</h1>
      
      <input type="file" name="myFile" onChange={changeHandler} ></input>
      <Button onClick={submitFile} >Upload</Button>
      </Form>
    
    </>
  )

}