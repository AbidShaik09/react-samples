import React, { useContext, useState } from 'react'
import { BookingContext } from '../../context/BookingContext';

const AddBooking = () => {
    const bookcontext = useContext(BookingContext)
    const {booking,setBooking} = bookcontext
    const[venue,setVenue] = useState();
    const[slot,setSlot] = useState()
    const[mobile,setMobile]=useState()
    const savehandler = ()=>{ 
        setBooking([...booking,{venue:venue,slotcode:slot,cmobile:mobile}])
    }
  return (
    <div>
     venue name   <input type="text" value={venue} onChange={(e)=>{setVenue(e.target.value)}}/> <br />
     slot code   <input type="text" value={slot} onChange={(e)=>{setSlot(e.target.value)}} /> <br />
     cmobile  <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br />
        <button onClick={savehandler}>Save</button>
    </div>
  )
}

export default AddBooking