import React from 'react'
 
interface headProps {
    children: JSX.Element,
}

export default function Heading(props: headProps) {
  return (
    <div>{props.children}</div>
  )
}
