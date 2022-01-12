import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Add(props) {
  const [disabled, cDisabled] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentProfileForm) {
      console.log("update")
      result = props.client.updateProfileForm(
        props.currentProfileForm._id,
       
        e.target.fullname.value,
        e.target.email.value,
        e.target.bio.value,
        e.target.linkedin.value,
        e.target.github.value,
        e.target.portfolio.value,
        //e.target.picture.value,
        //e.target.cv.value,

        //e.target.covidPass.checked
        
      );
    } else {
      console.log()
      result = props.client.addProfileForm(
         
        e.target.fullname.value,
        e.target.email.value,
        e.target.bio.value,
        e.target.linkedin.value,
        e.target.github.value,
        e.target.portfolio.value,
        //e.target.picture.value,
       // e.target.cv.value
        );
    }
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
    {props.currentProfileForm? "Update Profile" : "Add Profile"}
    </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
       <br />
      <Form onSubmit={(e) => submitHandler(e)} id="addForm">
        {/*Date: <br />
        <input
          type="text"
          defaultValue={props.currentProfileForm?.date}
          name="profileFormDate"
          disabled={disabled}
        />*/}
        Full Name: <br />
        <input
         required
          type="text"
          defaultValue={props.currentProfileForm?.fullname}
          name="fullname"
          disabled={disabled}
        />
        <br />
        Email <br />
        <input
           required
          type="text"
          defaultValue={props.currentProfileForm?.email}
          name="email"
          disabled={disabled}
        /><br/>
        Bio
        <br />
        <input
          
          type="text"
          defaultValue={props.currentProfileForm?.bio}
          name="bio"
          disabled={disabled}
          /><br/>
        Linkedin
        <br />
        <input
           type="text"
          defaultValue={props.currentProfileForm?.linkedin}
          name="linkedin"
          disabled={disabled}
        /><br/>
       Github
        <br />
        <input
           type="text"
          defaultValue={props.currentProfileForm?.github}
          name="github"
          disabled={disabled}
        /><br/>
        Portfolio
        <br/>
        <input
         
          type="text"
          defaultValue={props.currentProfileForm?.portfolio}
          name="portfolio"
          disabled={disabled}
        />
        <br/>
        {/*picture
        <br/>
        <input
         
          type="file"
          defaultValue={props.currentProfileForm?.picture}
          name="picture"
          disabled={disabled}
        />
        <br/>
        CV
        <br/>
        <input
         
          type="file"
          defaultValue={props.currentProfileForm?.cv}
          name="cv"
          disabled={disabled}
        /><br/>*/}
        
        <br />
        <Button size="sm"type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </Button>
      </Form>
      </div>
    </>
  );
}
export default Add;