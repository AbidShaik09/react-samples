import React from 'react'
import './Menu.css' 
import { Link, useNavigate } from 'react-router-dom'
const Menu = () => {
   const navigate = useNavigate()
    const loginHandler = ()=>{
        navigate('/login/100/ajay')
    }
    return(
    <header>
        <h3>Book My Venue</h3> 
        <ul>
            <li><Link to='/create-slot'> Slot Management</Link></li>
            <li>
               <Link to='/book-slot'> Booking</Link></li>
                <li onClick={loginHandler}>Login</li>
        </ul>
    </header>
  )
}

export default Menu