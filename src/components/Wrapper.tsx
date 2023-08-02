import React from 'react'

interface wrapperProps {
    styles: React.CSSProperties,
    children: React.ReactNode,
}

export default function Wrapper(props: wrapperProps) {
  return (
    <div style={props.styles}>
        {props.children}
    </div>
  )
}
