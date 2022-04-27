import React from 'react'
import { Container, Button } from 'react-bootstrap'

import "./viz.css"

const Visualizer = ({ range,array,generate,bubble,insertion,merge }) => {
 
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
                    <Button variant="warning" className="me-5" onClick={generate}>New Array</Button>
                    <Button variant="warning" className="me-5" onClick={bubble}>Bubble Sort</Button>
                    <Button variant="warning" className="me-5" onClick={insertion}>Insertion Sort</Button>
                    <Button variant="warning" className="me-5" onClick={merge}>Merge Sort</Button>
                    <Button variant="warning" className="me-5" onClick={range}>Define Range</Button>
                </div>
            </Container>
        </Container>
    )
}

export default Visualizer