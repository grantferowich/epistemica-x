import React from 'react';
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

const theme = createTheme();
const postURLStr = 'https://epistemica-x-db.vercel.app/api/user/post'

const SignUp = () => {
  const navigateFn = useNavigate();
  const dispatchFn = useDispatch();
  const updateStore = (responseHM) => {
    let dataHM = responseHM.data
    console.log('dataHM', dataHM)
    dispatchFn(setUserEmail(dataHM.email));
    dispatchFn(setUserName(dataHM.name));
    dispatchFn(setUserId(dataHM._id));
  }

  const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const firstName = data.get('firstName');
  const lastName = data.get('lastName');
  const name = firstName + " " + lastName
  const email = data.get('email');
  const password = data.get('password');
   
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
      setUserLoggedIn()
      // console.log(responseHM.data);
      // localStorage.setItem('user', JSON.stringify(responseHM.data));
       
      // engineered at 4:48pm on June 13, 2023
      // localStorage.setItem('isLoggedInToF', 'true')
      navigateFn('/user-home');
    })
    .catch(errorHM => {
      console.log(errorHM)
    })
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: 'white'}}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ backgroundColor: 'white'}}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
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