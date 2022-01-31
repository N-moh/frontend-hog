import 'bootstrap/dist/css/bootstrap.css';
import React,{ useState } from 'react';
import { Table, Button, Form, Row, Col } from "react-bootstrap";
//import { postImage } from './Api';


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
    })
} 


return (
    <>
    <Row>
    <Form.Group onSubmit={upload2}>
    <Col md="auto">
    <Form.Control type="file" name="cvFile" onChange={changeHandler} ></Form.Control>
    </Col>
    <Col md="auto">
    <Button size="sm" onClick={submitFile} >Upload</Button>
    </Col>
    </Form.Group>
    </Row>
    </>
)

}