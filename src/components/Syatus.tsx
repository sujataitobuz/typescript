import React from 'react'

interface StatusProps {
    status: 'loading' | 'success' | 'error'
}

export default function Syatus(props: StatusProps) {
    let message 
    if(props.status === 'loading') {
        return <>loading</>
    } else if (props.status === 'success') {
       return <>success</>
    } else if (props.status === 'error') {
        return <>error</>
    }


  return (
    <div>{message}</div>
  )
}
