import React from 'react'

interface nameProps {
  name: string
  surname: string,
}

interface ListProps<T> {
items: nameProps[],
onClick: (value: T) => void,
}

export default function GenericList<T extends {}>({items, onClick}: ListProps<T>) {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20}}>
        {items.map((item, index) => {
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        })}
    </div>
  )
}
