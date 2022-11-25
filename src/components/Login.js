import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { getAuth, signInWithRedirect,  GoogleAuthProvider } from "firebase/auth";




const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  const signIn = (e) => {
      e.preventDefault();
      signInWithRedirect(auth, provider);
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkVQrUHkNZ4eB1DgG2QiYxqivPocfkMEhQrWVlqTAvQ&s" alt='logo' />
        <h1>Sign in to Slack-Clone</h1>
        <p>Slack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items: center;
`;

const LoginInnerContainer = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
> img {
  object-fit: contain;
  height: 100px;
  margin-bottom: 40px;
}

> button {
  margin-top: 50px;
  text-transform: inherit !important;
  background-color: #0a8d48 !important;
  color: white;
}
`;