import 'bootstrap/dist/css/bootstrap.css';
import React,{ useState } from 'react';
import { Form, Row, Col } from "react-bootstrap";
//import { postImage } from './Api';
import Button from '@mui/material/Button';
import {toast} from 'react-toastify';


export default function CvUpload(props) {

const [selectedFile,changeSelectedFile] = useState();

const upload2 = (e) => {
    console.log("Upload")
    e.preventDefault()
}

const changeHandler = (event) => {
    changeSelectedFile(event.target.files[0]);
}

const submitFile = () => {
    props.client.postCv('tom',selectedFile)
    .then((res) => {
    console.log(res)
    props.changeCv(res.data.link);
    toast.success("CV uploaded")
    })
    .catch((error) => {
        toast.error("Failed to upload")
        
     });
} 


return (
    <>
    <Row>
    <Form.Group onSubmit={upload2}>
    <Col md="auto">
    <Form.Control type="file" name="cvFile" onChange={changeHandler} ></Form.Control>
    </Col>
    <Col md="auto">
    <Button variant="contained" color="primary" size="small" onClick={submitFile} >Upload</Button>
    </Col>
    </Form.Group>
    </Row>
    </>
)

}