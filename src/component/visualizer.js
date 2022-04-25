import React, { useEffect, useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'

import "./viz.css"

const Visualizer = () => {
    const [array, setArray] = useState([]);
    const [value , setValue] = useState();
    const [update, setUpdate] = useState(0);


    const resetArray = () => {
        let arr = [];
        for (let i = 0; i <242; i++) {
            arr.push(randomArray(1, 500))
        }
        setArray(arr)
    }
    
    console.log(value)

    const randomArray = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    /* const handleSlider = (e) =>{
        let slider = e.target.value ? Math.floor(Math.random()*(500 - 1 + 1)) : 0
        setValue(slider)
        console.log(value)
    }
       
 */
    const bubbleSort = () => {

    }

    const insertionSort = () => {

    }

    const mergeSort = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUpdate(value);
        console.log(update);
        setValue()
    }


    useEffect(() => {
        resetArray();
    }, [])

    return (
        <Container className='custom-container'>
            {array.map((value, idx) => {
                return (
                    <div key={idx} className="array-bar" style={{ height: `${value}px` }}>
                    </div>
                )
            })}
            <Container>
                <div className="d-flex mt-3">
                    <Button variant="warning" className="me-5" onClick={() => { resetArray() }}>  New Array</Button>
                    <Button variant="warning" className="me-5" onClick={() => { bubbleSort() }}>Bubble Sort</Button>
                    <Button variant="warning" className="me-5" onClick={() => { insertionSort() }}>Insertion Sort</Button>
                    <Button variant="warning" className="me-5" onClick={() => { mergeSort() }}>Merge Sort</Button>
                    <Form>
                        <div className='d-flex'>
                            <input type="text" className="me-5" onChange={(event) => setValue(event.target.value)}/>
                            <Button variant="success" type="submit" className="me-5" onClick={handleSubmit}>Submit</Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </Container>
    )
}

export default Visualizer