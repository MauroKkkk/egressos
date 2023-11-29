/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import NavMenu from './NavBar';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Profile(props){
    const userEmail = props
    const [email, setEmail] = useState('')
    const [gender,setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [picture, setPicture] = useState('')
    const [name, setName] = useState('')
    const [hometown, setHometown] = useState('')
    setEmail(props.email)
    axios.get(`http://localhost:3001/email/${email}`)
    .then((response)=>{
      setName(response.name)
    })

    return(
        <>
        <NavMenu/>
        <div className='Hero'>
            <nav>
                <h3>{name}</h3>
                <h3>{email}</h3>
                <h3>{gender}</h3>
                <h3>{birthday}</h3>
                <h3>{hometown}</h3>
                <img style={{width:50, height:50}} src={picture}/>
                
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
        </div>
        </>
    )
}
export default Profile;