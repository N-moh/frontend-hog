import React, { useState } from "react";
//import  Card  from "react-bootstrap/Card";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
//import {connect} from 'react-redux';
import DefaultUserPic from "./uploads/image.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App'

const axios = require('axios');
const url = "http://localhost:3001/";

//
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { faGithub  } from '@fortawesome/free-brands-svg-icons'


//import Moment from "react-moment";



class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user_id:this.props.user_id,
            fullname:this.props.fullname,
            email:this.props.email,
            profileImage:this.props.profileImage,
            uploadedFile:null
        }
    }

    fetchUserDetails=(user_id)=>{
        //console.log(user_id);
        axios.get(url+user_id,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
            this.setState({email:res.data.results[0].email});
            this.setState({profileImage:res.data.results[0].profileImage})
        })
        .catch(err=>console.log(err))
    }

    changeProfileImage=(event)=>{
       
        this.setState({uploadedFile:event.target.files[0]});
    }

    UpdateProfileHandler=(e)=>{
        e.preventDefault();
        //create object of form data
        const formData=new FormData();
        formData.append("profileImage",this.state.uploadedFile);
        formData.append("user_id",this.state.user_id);

        //update-profile
        axios.post(url,formData,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
           this.setState({msg:res.data.message});
           this.setState({profileImage:res.data.results.profileImage});
        })
        .catch(err=>console.log(err))
    }


    componentDidMount(){
     this.fetchUserDetails(this.state.user_id);
    }

render(){

    if(this.state.profileImage){
        var imagestr=this.state.profileImage;
        imagestr = imagestr.replace("public/", "");
        var profilePic=url+imagestr;
    }else{
        profilePic=DefaultUserPic;
   }

    return (
        <Container>
        <Row>
       <Col>
       <img src={profilePic} alt="profils pic" />
       </Col>
        <Col>
            <h1>User Profile</h1>
            <Form className="form">     
    {/*<p>{this.state.msg}</p>*/}
  <Form.Group controlId="formCategory1">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" defaultValue={this.state.fullname}/>
  
  </Form.Group>
  <Form.Group controlId="formCategory2">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" defaultValue={this.state.email} />
  
  </Form.Group>
 
  <Form.Group controlId="formCategory4">
    <Form.Label>Profile Image</Form.Label>
    <Form.Control type="file" name="profileImage" onChange={this.changeProfileImage}/>
    </Form.Group>
  <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>
  </Form>
   </Col>

       </Row>
        </Container>
    )
}
}

 {/*mapStatetoProps=(state)=>{
    return{
        user_id:state.user.userDetails.userid,
        fullname:state.user.userDetails.fullname,
       email:state.user.email,
       profileImage: state.user.profileImage,
       
    }
   }*/}
   
   

   export default UserProfile;
