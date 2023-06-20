import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { setUserEmail, setUserId, setUserName, setUserLoggedIn } from '../actions/userActions';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const theme = createTheme();
const postURLStr = 'https://epistemica-x-db.vercel.app/api/user/post'

const SignUp = () => {
  const navigateFn = useNavigate();
  const dispatchFn = useDispatch();
  const [errorMessageStr, setErrorMessageStr] = useState('')

  const updateStore = (responseHM) => {
    let dataHM = responseHM.data
    console.log('dataHM', dataHM)
    dispatchFn(setUserEmail(dataHM.email));
    dispatchFn(setUserName(dataHM.name));
    dispatchFn(setUserId(dataHM._id));
    dispatchFn(setUserLoggedIn(true))
  }

  const handleSubmit = async (event) => {
      let messagesArr = []
      const data = new FormData(event.currentTarget);
      const firstName = data.get('firstName');
      const lastName = data.get('lastName');
      let name = firstName + " " + lastName;
      const email = data.get('email');
      const password = data.get('password');
      
      // ensure every email has some string, "@", string, ".", string

      if (email === '' || email === null ) {
        messagesArr.push('Invalid email.')
      }

      if (password === '' || password === null){
        messagesArr.push('Invalid password.')
      }

      if (name === ' '){
        name = ''
        messagesArr.push('Invalid name.')
      }

      // if the email is not valid
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        messagesArr.push('Invalid email.')
      }


      if (messagesArr.length > 0){
        event.preventDefault()
        setErrorMessageStr(messagesArr[messagesArr.length -1])
        return
      }
      event.preventDefault()
      
      try { 
        const dataX = { 
          "name": name,
          "email": email, 
          "password": password
        }
        axios.post(postURLStr, JSON.stringify(dataX), {
        withCredentials: false,
        headers: {
        "Content-Type":"application/json",
        }
        })
        .then(responseHM => {
          updateStore(responseHM);       
          // engineered at 4:48pm on June 13, 2023
          // localStorage.setItem('isLoggedInToF', 'true')
          navigateFn('/user-home');
        })
        .catch(errorHM => {
          messagesArr.push(errorHM.response.data.message)
          setErrorMessageStr(messagesArr[messagesArr.length - 1])
        })
        } catch (errorHM) {
          console.log('Error occurred while signing up.')
        }

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <div id='error' style={{ paddingBottom: '10px'}}>
          {errorMessageStr && <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">{errorMessageStr}</Alert>
                </Stack>}
          </div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <div id='first-name'>
                  <TextField
                    style={{ backgroundColor: 'white'}}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div id='last-name'>
                  <TextField
                    style={{ backgroundColor: 'white'}}
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div id='email'>
                  <TextField
                    style={{ backgroundColor: 'white'}}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div id='password'>
                  <TextField
                    style={{ backgroundColor: 'white'}}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </div>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default connect(null )(SignUp);