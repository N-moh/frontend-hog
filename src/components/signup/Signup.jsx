
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

    height:'80vh',
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
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    props.client.signup(username, role, password, firstname, lastname, email)
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
      <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      name="radio-buttons-group"
      onChange={e => setRole(e.target.value)}
      >
    <FormControlLabel value="participant" control={<Radio />} label="Participant" />
    <FormControlLabel value="employer" control={<Radio />} label="Employer" />
      </RadioGroup>
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
        <Button variant="contained">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Signup;