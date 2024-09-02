import React, { useState } from 'react'
// import ShowDish from '../showdish/ShowDish'


const AddDish = (props) => {
   
    const [id,setId] = useState('0')
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    // const [dishes,setDishes] = useState([])
    const dish = {
      id:id,
      name:name,
      price:price
  }
   const addHandler = ()=>{
      
    props.storeDish(dish)
     // setDishes([...dishes,dish])
     //dishes.push(dish)
        setId('0')
        setName('')
        setPrice('0')
    }
    // const showCount = (p)=>{alert(p)}
  return (
    <div>
         <div className="form-group bg-primary">
            Id   <input type="text"  value={id} onChange={(e)=>setId(e.target.value)}/>
         </div>
         <div className="form-group">
            Name <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
         </div>
         <div className="form-group">
            Price <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
         </div>
         <div className="form-group">
            <button className='btn btn-success' onClick={addHandler}>Add</button>
         </div>
         <div>
            
         </div>
         {/* <ShowDish dishes={dishes} showCount={showCount}/> */}
         
    </div>
  )
}

export default AddDish