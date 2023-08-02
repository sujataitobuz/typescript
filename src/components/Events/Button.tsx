import React from 'react'

interface ButtonProps {
    // handleClick: () => void, //without parameter

     handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void, //without parameter
}

export default function Button(props: ButtonProps) {
  return (
    <div onClick={() => props.handleClick}>Button qqqq</div>
  )
}
