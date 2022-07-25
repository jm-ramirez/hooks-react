import React, { useEffect, useRef, useState } from 'react'
import { Employees } from './Employees'

export const Management = () => {
    const [name, setName] = useState('');
    const managerInput = useRef();

    const assignManager = e => {
        setName(managerInput.current.value);
    };
    
    useEffect(() => {
        console.log('La vista se ha renderizado');
    },)
    
    return (
        <div>
            <h1>Manager name: {name}</h1>
            <input type='text' ref={ managerInput } onChange={ assignManager } placeholder='Enter your manager name'></input>

            <h2>Employees list:</h2>
            <p>Users come from jsonplaceholder...</p>
            <Employees/>
            <hr/>
        </div>
    )
}
