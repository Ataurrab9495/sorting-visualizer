import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Visualizer from './component/visualizer';

function App() {
  return (
    <Container className='d-flex justify-content-center' style={{height:'100vh'}}>
      <div className='w-100'>
      <Visualizer/>
      </div>
    </Container>
  );
}

export default App;
