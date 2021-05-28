import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })


    const {name, email} = formState

    useEffect(()=>{
      //  console.log('hey')
    },[])
    useEffect(()=>{
      //  console.log('formState cambio')
    },[formState])
    useEffect(()=>{
       // console.log('email cambio')
    },[email])
    
    const handleInputChange = ({target}) => {
        setformState({
            ...formState,
           [target.name]: target.value
        });
    }

    return (
        <>
           <h1>SimpleForm</h1>
            <hr/> 
            <div className = 'form-group'>
            <input 
            className = 'form-control'
            type = 'text'
            autoComplete = 'off'
            name = "name"
            placeholder = 'Nombre'
            value = {name}
            onChange = {handleInputChange}
            >
            
            
            </input>

            <input 
            className = 'form-control'
            type = 'text'
            autoComplete = 'off'
            name = "email"
            placeholder = 'Email'
            value = {email}
            onChange = {handleInputChange}
            >
            
            
            </input>

            </div>

            {(name==='123')&& <Message />}


        </>
    )
}
