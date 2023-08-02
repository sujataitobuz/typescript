import React from 'react'
import { desProps } from './Destructuring.type'

export default function Destructuring({title, style, children}: desProps) {
  return (
    <div style={style}>
        <p>{title}</p>
        {children}
    </div>
  )
}
