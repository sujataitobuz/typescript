import React from 'react'
import GenericList from './GenericList'

export default function GenericProp() {
  return (
    <>
    {/* <GenericList items={['sujata', 'sumi', 'soumita', 'ani']} onClick={(item) => console.log(item)} />
    <GenericList items={[1, 2, 3, 4,]} onClick={(item) => console.log(item)} /> */}
    <GenericList items={[
        {
            name: 'sujata 1',
            surname: 'biswas'
        }, 
        {
            name: 'sujata 2',
            surname: 'biswas'
        }, 
        {
            name: 'sujata 3',
            surname: 'biswas'
        }, 
    ]}  onClick={(item) => console.log(item)}  />
    </>
  )
}
