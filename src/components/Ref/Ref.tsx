import React, { useEffect, useRef } from 'react'

export default function Ref() {
    const inputref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputref.current?.focus();
    }, []);

  return (
      <input type="text" placeholder='sddshb' ref={inputref} />
  )
}
