import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.jpeg';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function LoginPage() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the registration page when a button is clicked
    navigate('/register');
  };
  const handleLoginClick = () => {
    // Navigate to the registration page when a button is clicked
    navigate('/album');
  };

  const handleForgotPasswordClick = () => {
    // Navigate to the registration page when a button is clicked
    navigate('/forgotpassword');
  };

  
    return (
      <Container
      maxWidth="xs"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <img src={logo} alt="Logo" width="800" height="400" />

      <Typography variant="h5" style={{ margin: '20px 0' }}>
      </Typography>

      <Button onClick={handleLoginClick} variant="contained" color="primary" style={{ margin: '10px' }}>
        Log In
      </Button>
      <Button onClick={handleRegisterClick} variant="contained" color="secondary" style={{ margin: '10px' }}>
        Register
      </Button>
      <Button onClick={handleForgotPasswordClick} variant="contained" color="primary" style={{ margin: '10px' }}>
        Forgot Password
      </Button>
    </Container>
  );
}

export default LoginPage;