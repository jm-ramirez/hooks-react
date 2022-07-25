import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const ExampleUseEffect = () => {
    //useLayoutEffect - Se ejecuta de manera asincrona despues de hacer todas las mutaciones y cambios en el DOM. 
    //Permite hacer cambios en el estado y en el DOM, antes que el useEffect.

    //useEffect - Se ejecuta luego que el componente termina de renderizarse,
    const [show, setShow] = useState(true)

    const box = useRef();
    const button = useRef();

    useLayoutEffect(() => {
        console.log('useLayoutEffect cargado!');
    }, []);

    useEffect(() => {
        console.log('useffect cargado!');
        
        if(box.current === null) return;

        const { bottom } = button.current.getBoundingClientRect();
        //console.log(bottom);
        box.current.style.marginTop = `${bottom + 45}px`;
    }, [show]);
    
    return (
        <div>
            <button onClick={() => setShow(prev => !prev)} ref={button}>Show message</button>
            {show && (
                <div id='box' ref={box}>
                    Hi, Im message {show}
                </div>
            )}
        </div>
    )
}
