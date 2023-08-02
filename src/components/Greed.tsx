import React from 'react'

interface GreedProps {
    name?: string,
    message: string,
    isLogedin: boolean,
}

export default function Greed({name, message, isLogedin}: GreedProps) {
  return (
    <>
    {!isLogedin && (
        <div>this is a {name} and {message}</div>
    )}    
    </>

  )
}
