import React, { useEffect, useRef, useState } from 'react'

export const Example = () => {
    const [numberGretting, setNumberGretting] = useState(0);
    const grettingsInQueue = useRef(numberGretting);

    useEffect(() => {
        //Lo que busco aca es que pese a que haya una cola con cierto retraso, se muestre el valor actual 
        //del estado en el próximo console.log, tenga o no tenga retraso, necseito el dato actualizado.
        grettingsInQueue.current = numberGretting;
        setTimeout(() => {
            console.log(`Grettings in queue: ${grettingsInQueue.current}`);
        }, 2000);
    }, [numberGretting])
    

    const sendGretting = e => {
        setNumberGretting(numberGretting+1);
    };

  return (
    <div>
        <h2>Grettings sent: {numberGretting}</h2>
        <button onClick={sendGretting}>Send grettings</button>
        <hr/>
    </div>
  )
}
