import React from 'react'

interface PersonType {
    data: {
        name: string,
        des: string
    }
}

export default function Person(props: PersonType) {
  return (
    <div>{`hii I am ${props.data.name} ${props.data.des}`}</div>
  )
}
