import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Login(props) {
  const [disabled, cDisabled] = useState(false);
  const submitHandler = (e) => {
  console.log("submitted");
   e.preventDefault();
   cDisabled(true);
   props.client
    .login(e.target.username.value,e.target.password.value)
    .then( (response) => {
      cDisabled(false);
      console.log(response.data.token);
      props.loggedIn(response.data.token);
      console.log(response.data.token);
    })
    .catch((error) => {
        alert("an error occurred, please try again")
        console.log(error);
        cDisabled(false);
    });
  };
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
    <h2 >Login</h2>
      <br />
      </div>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >
      <Form onSubmit={(e) => submitHandler(e)} >
  <Form.Group className="mb-3" >
    <Form.Label><h4>Name</h4></Form.Label><br/>
    <input required type="text" name="username" disabled={disabled} placeholder="enter name" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label><h4>Password</h4></Form.Label><br/>
    <input required type="password"  name="password" disabled={disabled} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" >
    {/*<Form.Check type="checkbox" label="Check me out" />*/}
  </Form.Group>
  <Button  type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </Button>
</Form>
      {/*<form onSubmit={(e) => submitHandler(e)}>
        username
        <br />
        <input type="text" name="username" disabled={disabled} />
        <br />
        password
        <br />
        <input type="password" name="password" disabled={disabled} />
        <br />
        <br />
        <Button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </Button>
  </form>*/}
  </div>
    </>
  );
}
export default Login;