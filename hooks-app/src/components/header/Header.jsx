 import React from 'react'
 import{Link} from 'react-router-dom'
 const Header = () => {
   return (
     <header style = {{'backgroundColor':'cyan','height':'13vh'}}>Swiggy
     <ul>
      <li><Link to="/adddish"> Add Dish</Link></li>
      <li><Link to="/showdish"> show Dish</Link></li>
     </ul>
     </header>
   )
 }
 
 export default Header