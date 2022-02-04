
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToggleButtonGroup } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import {toast} from 'react-toastify';


//import toastr from "toastr";
//import "toastr/build/toastr.min.css";

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundImage:`url(${"/assets/pic1.jpg"})`,
    backgroundColor:'white',
    // opacity:0.2,
    height: '600px',
    opacity:'0.85',
    TextField:'blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),


    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
     
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstname, setFirstName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [alignment, setAlignment] = React.useState('employer');
  const role = alignment
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };



  const handleSubmit = e => {
    e.preventDefault();
    toast.success("Signing up !")
    
    props.client.signup(username, role, password, firstname, lastname, email)
    
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {/* <Button type="submit" style={{ maxWidth: '130px', maxHeight: '70px' }}  variant="contained" color="primary">
      <h3> Sign Up</h3>
      </Button> */}
      <h2>Sign Up</h2>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
      <ToggleButton value="employer">Employer</ToggleButton>
      <ToggleButton className="see-btn" value="participant">Participant</ToggleButton>
      </ToggleButtonGroup>
      <TextField
        label="User Name"
        variant="filled"
        required
        value={username}
        onChange={e => setUserName(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstname}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastname}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Signup;