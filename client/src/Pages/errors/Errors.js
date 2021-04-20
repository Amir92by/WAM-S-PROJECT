import React from 'react'
import img from '../../assets/Erreur-404-1.jpg'
import {Link}from 'react-router-dom'

const Errors = () => {
    return (
        <div>
            <Link to="/">
            <img src={img} alt='err'/>
            </Link>
        </div>
    )
}

export default Errors
