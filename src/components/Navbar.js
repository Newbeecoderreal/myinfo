import React from 'react'
import './styles/Navbar.css';
import World from '../images/World.png'

export default function Navbar () {
    return (
        <div className='navbar'>
            <img src={World}></img>
            <h1>My Travel Journal</h1>
        </div >
    )
}