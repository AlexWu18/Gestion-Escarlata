import React, { useState } from 'react';
import AuthForm from './';
import'./App.css';
function App() {
  const [authType, setAuthType] = useState('login');
  
  return (

    <div class = "color">
      <img src= 'Gestion.jpg' alt='Gestion' width="250" height="150"/>
      <AuthForm type={authType} />
      <button class ="buttonLogin" onClick={() => setAuthType('login')}>Login</button>
      <button class ="buttonSignUp" onClick={() => setAuthType('signup')}>Sign Up</button>
    </div>
  );
}

export default App;
