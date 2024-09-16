import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

// Sample email and password combinations for login
const validCredentials = [
  { email: "user1@example.com", password: "User1Pass" },
  { email: "user2@example.com", password: "User2Pass" },
  { email: "user3@example.com", password: "User3Pass" }
];

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Check if the entered email and password match any of the valid combinations
    const isValid = validCredentials.some(
      (cred) => cred.email === email && cred.password === password
    );

    if (isValid) {
      setErrorMessage('');
      onLoginSuccess(); // Trigger the login success function
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && (
          <Typography color="error" sx={{ mt: 1 }}>
            {errorMessage}
          </Typography>
        )}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;
