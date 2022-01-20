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
    .then((res) => {
    
    props.changePicture("http://localhost:3001" + res.data.filename.replace('./uploads/','/user/pic/') );
    console.log(res.data.filename.replace('./uploads/','/user/pic/'))
    })
  
    
  } 
  

  return (
   
    
    <>
    
      <Form onSubmit={upload}>
      <Form.Control type="file" name="myFile" onChange={changeHandler} ></Form.Control>
      <Button size="sm" onClick={submitFile} >Upload</Button>
      </Form>
    
    </>
  )

}