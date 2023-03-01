import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Grid,Paper,MenuItem} from '@mui/material';
import { login } from '../../store/authSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('user');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const userType = [
    {
      value: 'admin',
      label: 'admin',
    },
    {
      value: 'user',
      label: 'user',
    },

  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setEmailError('Email is required');
    } else if (!isValidEmail(email)) {
      setEmailError('Email is not valid');
    } else if (!password) {
      setPasswordError('Password is required');
    } else {
      dispatch(login({ email, password }));
      navigate('/admin');
    }
  };

  const isValidEmail = (email) => {
    // Email validation logic
    return true
  };

  return (
   <Grid container spacing={2} justifyContent={"center"} >
    <Grid item sm={6} lg={4} xs={12} mt={20} >
  <Paper elevation={9} sx={{p:2}} >
  <form onSubmit={handleSubmit} m={5} >
      <Typography variant="h6"  textAlign={"center"} py={2} >{type == "user" ? "User Login" : "Admin Login"}</Typography>
     
        <TextField
          id="outlined-select-currency"
          select
          fullWidth
          onChange={handleTypeChange}
          label="Select"
          defaultValue="user"
          helperText="Please select your identity"
        >
          {userType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

    
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        error={!!emailError}
        helperText={emailError}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={!!passwordError}
        helperText={passwordError}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth >
        Login
      </Button>
    </form>
  </Paper>
    </Grid>
    </Grid> );
}

export default Login;
