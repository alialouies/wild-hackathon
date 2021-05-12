import React from 'react'
import MarsAroundHeader from './MarsAroundHeader'
import Products from './Products'
import '../styles/MarsAround.css'


function MarsAround(props) {
    const {isOpen} = props;

    return (
        <>
        <div id="main" className={isOpen && "main"}>
            <MarsAroundHeader/>
            <Products/>
        </div>
        </>
    )
}

export default MarsAround