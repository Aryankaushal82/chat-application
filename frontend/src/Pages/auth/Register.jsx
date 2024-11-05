import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const registerUser = async (e)=>{
      e.preventDefault();
      const {data} = await axios.post('/user/register',{username,password});
      if (data.success){
        console.log(data);
        toast.success("User registered successfully");
        //page par bhej do
      }
      else{
        toast.error(data.message);
      }
    }
  return (
    <div className='bg-blue-50 h-screen flex items-center '>
      <form onSubmit={registerUser} className='w-64 mx-auto mb-12 '>
        <input type="text" value={username} onChange={(e)=> {setUsername(e.target.value)}} placeholder='username' className='block w-full rounded-md p-2 mb-2 border '/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='block w-full rounded-md p-2 mb-2'/>
        <button className='bg-blue-500 text-white block w-full rounded-md p-2'>Register</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Register
