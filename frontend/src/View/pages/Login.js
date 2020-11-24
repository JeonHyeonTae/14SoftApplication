import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, ListItem } from '@material-ui/core';
import { Login_Form } from '../components';
import './pages.css';

const Login = () => {
  return (
    <Grid container className='login_form'>
      <Login_Form></Login_Form>
      <ListItem className='Sign'>
        <Grid className='Sign_button'>
          <Link to={'/Sign_Up_P'}>
              회원가입
          </Link>
          </Grid>
      </ListItem>
    </Grid>
    
  )
}

export default Login;
