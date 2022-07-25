import React, { useEffect, useRef, useState } from 'react'
import { Employees } from './Employees'

export const Management = () => {
    const [name, setName] = useState('');
    const managerInput = useRef();
    const [page, setPage] = useState(1)

    const assignManager = e => {
        setName(managerInput.current.value);
    };
    
    useEffect(() => {
        console.log('The view has been rendered');
    },)
    
    return (
        <div>
            <h1>Manager name: {name}</h1>
            <input type='text' ref={ managerInput } onChange={ assignManager } placeholder='Enter your manager name'></input>

            <h2>Employees list:</h2>
            <p>Users come from jsonplaceholder...</p>
            <button onClick={() => setPage(1) }>Page 1</button> 
            <button onClick={() => setPage(2) }>Page 2</button>
            <Employees page={page}/>
            <hr/>
        </div>
    )
}
