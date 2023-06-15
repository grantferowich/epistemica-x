import * as React from 'react';
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
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserEmail, setUserId, setUserName } from '../actions/userActions';

const theme = createTheme();
const loginURLStr = 'https://epistemica-x-db.vercel.app/api/user/login';

const Login = () => {
  const navigateFn = useNavigate();
  const dispatchFn = useDispatch();

  // engineered updateStore(userObj) on Sat May 27, 2023
  // at 9:07am
  const updateStore = (userObj) => {
    let dataHM = userObj.data.userObj
    dispatchFn(setUserName(dataHM.name));
    dispatchFn(setUserEmail(dataHM.email));
    dispatchFn(setUserId(dataHM._id));
  }  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const email = data.get('email');
      const password = data.get('password');
      const dataX = {
        "email": email, 
        "password": password
      }
      axios.post(loginURLStr, JSON.stringify(dataX), {
        withCredentials: false,
        headers: {
          "Content-Type":"application/json"
        }
      }).then(responseHM => {
        console.log('200: Success');
        updateStore(responseHM);
        // engineered at 4:48pm on June 13, 2023
        localStorage.setItem('isLoggedInToF', 'true')
        navigateFn('/user-home');
      }).catch(errorHM => {
        console.log(errorHM);
      })
    } catch (error) {
      console.log('Error occurred while logging in.')
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{ backgroundColor: '#cbe3ff'}}>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              style={{ backgroundColor: 'white'}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              style={{ backgroundColor: 'white'}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default connect(null)(Login);