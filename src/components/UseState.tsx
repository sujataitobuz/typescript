import React, { useState } from 'react'
import { factory } from 'typescript';

export default function UseState() {
    const [logedin, setLogedin] = useState<boolean>(false);
    const logEvent = () => {
      setLogedin(true); 
    };

    const outEvent = () => {
        setLogedin(false);
    }

    
  return (
    <>
    <button onClick={logEvent}>Log in</button>
    <button onClick={outEvent}>Log Out</button>
    <p>user is  {logedin ? 'loged in' : 'log out'}</p>
    </>
  )
}
