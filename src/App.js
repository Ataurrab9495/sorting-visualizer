import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Visualizer from './component/visualizer';

function App() {
  const [input , setInput] = useState(5);

  const range = () =>{
    const rangeValue = prompt("Enter the Range:-");
    setInput(rangeValue)
  }
  return (
    <Container className='d-flex align-items-center justify-content-end' style={{height:'100vh'}} fluid>
      <div className='w-100' style={{maxWidth:'100%'}}>
      <Visualizer range={range} input={input}/>
      </div>
      <p>{input}</p>
    </Container>
  );
}

export default App;
