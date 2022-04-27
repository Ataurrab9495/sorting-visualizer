import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'

import "./viz.css"

const Visualizer = ({ range, input }) => {
    const [array, setArray] = useState([]);
  


    const resetArray = () => {
        let arr = [];
        for (let i = 0; i <230; i++) {
            arr.push(randomArray(1, 500))
        }
        setArray(arr)
    }



    const randomArray = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    const bubbleSort = () => {

    }

    const insertionSort = () => {

    }

    const mergeSort = () => {

    }


    useEffect(() => {
        resetArray();
    }, [])

    return (
        <Container>
            <div className='d-flex justify-content-center'>
                {array.map((value, idx) => {
                    return (
                        <div key={idx} className="array-bar" style={{ height: `${value}px` }}>
                        </div>
                    )
                })}
            </div>
            <Container>
                <div className="d-flex mt-3 justify-content-center">
                    <Button variant="warning" className="me-5" onClick={() => { resetArray() }}>  New Array</Button>
                    <Button variant="warning" className="me-5" onClick={() => { bubbleSort() }}>Bubble Sort</Button>
                    <Button variant="warning" className="me-5" onClick={() => { insertionSort() }}>Insertion Sort</Button>
                    <Button variant="warning" className="me-5" onClick={() => { mergeSort() }}>Merge Sort</Button>
                    <Button variant="warning" className="me-5" onClick={range}>Define Range</Button>
                </div>
            </Container>
        </Container>
    )
}

export default Visualizer