import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border: 3px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px;
  background-color: #2c0604;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AuthForm = ({ type }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      console.log('Username:', username, 'Password:', password, 'Email:', email);
      // Perform authentication or sign up logic here
    }
  };

  return (
    <Container> 
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Usuario" required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña" required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {type === 'signup' && (
          <Input
            type="email"
            placeholder="Correo Electronico" required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        <Button type="submit">{type === 'login' ? 'Login' : 'Sign Up'}</Button>
      </Form>
    </Container>
  );
};

export default AuthForm;
