import React from 'react';
import Login from './components/Login'
import Register from './components/Register'
import  { Container } from './components/style'
function App() {
  return (
    <Container>
        <Login />
        <Register />
    </Container>
  );
}

export default App;
