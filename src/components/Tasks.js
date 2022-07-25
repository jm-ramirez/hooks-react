import React, { memo, useMemo, useState } from 'react'

export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(630)
    const saveTasks = e => {
        e.preventDefault();
         
        setTasks(task => [...task, e.target.description.value]);
        console.log(tasks);
    };

    const deleteTask = id => {
        //filter tasks
        let new_tasks = tasks?.filter((task, indice) => indice !== id);
        console.log(new_tasks);
        //save new task list in the state
        setTasks(new_tasks);
    };

    const addToCounter = e => {
        setCounter(counter+1)
    };

    const lastCounters = (acumulation) => {
        for (let i = 0; i <= acumulation; i++) {
            console.log('Executing accumulation of counters from the past...');
        }

        return `Manual task counter: ${acumulation}`;

    };

    //useMemo -- SE UTILIZA GENERALMENTE PARA MEJORAR EL PERFORMANCE DE LA APLICACION
    //EN ESTE CASO LE ASIGNAMOS A LA CONSTANTE memoCounters LA FUNCION lastCounters Y PONEMOS COMO DEPENDENCIA counter.
    //ESTO HACE QUE LA FUNCION SEA LLAMADA SOLO CUANDO INICIA EL COMPONENTE Y CUANDO CAMBIE EL VALOR DE counter, ASI EVITAMOS QUE SE RECARGUE VARIAS VECES.
    const memoCounters = useMemo(() => lastCounters(counter), [counter]);
    return (
        <div>
            <h1>My tasks</h1>
            <form onSubmit={saveTasks}>
                <input type='text' name='description' placeholder='Describe the task'/>
                <input type='submit' value='Save'/>
            </form>

            <h3>{memoCounters}</h3>
            <button onClick={() => addToCounter()}>Add</button>

            <h3>Tasks list:</h3>
            <ul>
                
            {
                tasks?.map((task, indice) => {
                    return (
                        <li key={indice}>
                            {task} &nbsp; <button onClick={() => deleteTask(indice)}>X</button>
                        </li>    
                    )
                })
            }
            </ul>
            <hr/>
        </div>
    )
}
