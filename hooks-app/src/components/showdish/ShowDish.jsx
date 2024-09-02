import React, { useState } from 'react'
import AddDish from '../adddish/AddDish'

const ShowDish = () => {
 const [dishes,setDishes]=useState([{id:1,name:'ddd',price:33}])
 const storeDish = (dish)=>{
    
    setDishes([...dishes,dish])
 }
  return (
    <div>
        <AddDish storeDish={storeDish}/>
        {JSON.stringify(dishes)}

        
    </div>
  )
}

export default ShowDish