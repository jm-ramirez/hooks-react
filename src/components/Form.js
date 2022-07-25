import React, { useRef } from 'react'

export const Form = () => {
    const nameInput = useRef();
    const lastNameInput = useRef();
    const emailInput = useRef();
    const myBox = useRef();

    const show = e => {
        e.preventDefault();
        console.log(nameInput.current.value);
        console.log(lastNameInput.current.value);
        console.log(emailInput.current.value);

        console.log(myBox);
        let { current: box } = myBox;
        box.classList.add('background-green');
        box.innerHTML = 'Form send!';
    };

    return (
        <div>
            <h1>Form</h1>

            <div ref={myBox} className='my-box'>
                <h2>Test with useRef</h2>
            </div>

            <form onSubmit={show}>
                <input type='text' placeholder='Name' ref={nameInput}/><br/>
                <input type='text' placeholder='Last Name' ref={lastNameInput}/><br/>
                <input type='email' placeholder='Email' ref={emailInput}/><br/>

                <input type='submit' placeholder='Send' value='Send' />
            </form>

            <button onClick={() => nameInput.current.select()}>Fill form</button>
        </div>
    )
}
