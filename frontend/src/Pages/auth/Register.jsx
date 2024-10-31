import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className='bg-blue-50 h-screen flex items-center '>
      <form className='w-64 mx-auto mb-12 '>
        <input type="text" value={username} onChange={(e)=> {setUsername(e.target.value)}} placeholder='username' className='block w-full rounded-md p-2 mb-2 border '/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='block w-full rounded-md p-2 mb-2'/>
        <button className='bg-blue-500 text-white block w-full rounded-md p-2'>Register</button>
      </form>
    </div>
  )
}

export default Register
