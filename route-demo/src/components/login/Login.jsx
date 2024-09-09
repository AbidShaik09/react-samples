import React from 'react'
import { useParams } from 'react-router-dom'

const Login = () => {
  const  {id,name} = useParams();
  return (
    <div>
        Your ID is {id}  and Name is {name}<br />
        username  <input type="text" /> <br />
        password <input type="password" name="" id="" />
        <button>Sign In</button>
    </div>
  )
}

export default Login