import React, { useEffect, useState } from 'react'

export const Employees = React.memo(({page}) => {
    const [employees, setEmployees] = useState([]);
    console.log('Employees have been re-rendered');

    const getEmployees = async(p) => {console.log(p);
        const url = `https://reqres.in/api/users?page=${p}`;
        const request = await fetch(url);
        const { data: employees } = await request.json();
        
        setEmployees(employees);

        console.log('The ajax request is executed');
    };

    useEffect(() => {
        getEmployees(page);
    }, [page]);
    

    return (
        <div>
            <p>Showing page: {page}</p>
            <ul className='employees'>
                {employees.length > 0 &&
                    employees.map(employee => {
                        return <li key={employee.id}>{`${employee.first_name} ${employee.last_name}`}</li>
                    })
                }
            </ul>
        </div>
    )
})
