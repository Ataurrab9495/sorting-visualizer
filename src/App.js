import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Visualizer from './component/visualizer';
import bubbleSort from './component/algoritms/bubbleSort';
import insertionSort from './component/algoritms/insertionSort'
import mergeSort from './component/algoritms/mergeSort'

function App() {
  const [arr, setArr] = useState([]);
  const [input, setInput] = useState(130);

  const range = () => {
    const rangeValue = prompt("Enter the Range:-");
    setInput(rangeValue)
  }

  const updateArray = () => {
    const randomArray = Array.from({ length: input }, () =>
      getRandomArbitary(10, 500)
    );
    setArr(randomArray)
    console.log(arr);
  }

  const getRandomArbitary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  useEffect(() => {
    updateArray();
  },[input])

  useEffect(() => { }, [arr])

  // sorting algorithms function

  const bubbleSortOnClick = () => {
    console.log("sorting begins...")
    const sorted_arr = bubbleSort(arr);
    const new_arr = [...sorted_arr]
    setArr(new_arr);
    console.log(sorted_arr);
    console.log("sorting completed...");
  }


  const insertionOnClick = () => {
    const sort_arr = insertionSort(arr);
    const new_arr = [...sort_arr]
    setArr(new_arr)

  }



  const mergeOnClick = () =>{
    const sort = mergeSort(arr);
    const new_arr = [...sort]
    setArr(new_arr)
  }

  return (
    <Container className='d-flex align-items-center justify-content-end' style={{ height: '100vh' }} fluid>
      <div className='w-100' style={{ maxWidth: '100%' }}>
        <Visualizer
          range={range}
          array={arr}
          generate={updateArray}
          bubble={bubbleSortOnClick}
          insertion={insertionOnClick}
          merge ={mergeOnClick}
        />
      </div>
    </Container>
  );
}

export default App;
