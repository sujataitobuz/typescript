import React from 'react'

interface listProps {
    data: {
        name: string,
        surname: string
    }[]
}

export default function PersonList(props: listProps) {
  return (
    <div>{props.data.map((el) => {
        const a = el.name.charAt(0).toUpperCase();
        const b = el.surname.charAt(0).toUpperCase();
        return(
<React.Fragment key={el.name}>
<p>{el.name} {el.surname}</p>
<p>{`${a} ${b}`}</p>
</React.Fragment>
        )
    })}</div>
  )
}
