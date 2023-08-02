import React, { useState } from 'react'

interface UserProps {
    name: string,
    email: string
}

export default function User() {
    const [user, serUser] = useState<UserProps | null>(null)

    const handleLogIn = () => {
serUser({
    name: 'Sujata Biswas',
    email: 'sujata@itobuz.com'
})
    }

    const handleLogOut = () => {
       serUser(null);
    }

  return (
    <div>
        <p>user</p>
        <button onClick={handleLogIn}>log in</button>
        <button onClick={handleLogOut}>log out</button>
        <p>the user name is {user?.name}</p>
        <p>the user email is {user?.email}</p>
    </div>
  )
}
