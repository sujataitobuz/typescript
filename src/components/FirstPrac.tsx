import React from 'react'
import Greed from './Greed'
import Person from './Person'
import PersonList from './PersonList'
import Syatus from './Syatus'
import Heading from './Heading'
import Button from './Events/Button'
import Wrapper from './Wrapper'
import Destructuring from './Destructuring/Destructuring'

export default function FirstPrac() {
    const data = {
    name: 'react js',
    des: 'learner',
  }

  const arr = [
    {
     name: 'sujata', 
     surname: 'biswas'
    },
    {
     name: 'soma',
     surname: 'biswas'
    },
    {
     name: 'ani', 
     surname: 'biswas'
    }
  ]
    const clickEvent = (event: any, id: any) => {
    console.log('this is a click event', event, id);
    
  }
  return (
    <div>
        <Greed message='this is a typescript component' isLogedin={false} />
        <Person data={data} />
        <PersonList data={arr} />
        <Syatus status='error' />
        <Heading>
          <>dmn bvnmdb fv</>
        </Heading>

        <Button handleClick={() => clickEvent}/>
        <Wrapper styles={{border: '1px solid red', padding: '10px 20px', borderRadius: '10px', marginTop: '10px'}}>
          <p>Hellow React</p>
        </Wrapper>

        <Destructuring title='Destructuring' style={{border: '1px solid red', padding: '10px 20px', borderRadius: '10px', marginTop: '10px'}}>
          <h1>dsjhvchj</h1>
        </Destructuring>
    </div>
  )
}
