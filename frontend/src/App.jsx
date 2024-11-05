import React from 'react'
import Register from './Pages/auth/Register'
import axios from 'axios';

const App = () => {
  axios.defaults.baseURL='http://localhost:4000';
  axios.defaults.withCredentials= true; //this will enable to set cookies
  return (
    <div>
      <Register/>
    </div>
  )
}

export default App
