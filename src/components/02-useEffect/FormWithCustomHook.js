import React from 'react';
import { useForm } from '../../Hooks/useForm';
import './effects.css';


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })


    const {name, email, password} = formValues
    const handleSubmit = ( e ) =>{
        e.preventDefault();
        console.log (formValues)



    }

    return (
       
        <form onSubmit={handleSubmit}>
           <h1>FormWithCustomHook</h1>
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

            <input 
            className = 'form-control'
            type = 'password'
            name = "password"
            placeholder = '******'
            value = {password}
            onChange = {handleInputChange}
            >
            
            
            </input>    
            </div>
            <button type = 'submit' className='btn btn-primary'>
                Guardar
            </button>

            </form>
    )
}
