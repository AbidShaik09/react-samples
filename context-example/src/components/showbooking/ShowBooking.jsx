import React, { useContext } from 'react'
import { BookingContext } from '../../context/BookingContext'

const ShowBooking = () => {
    const bookcontext = useContext(BookingContext)
    const { booking} = bookcontext
  return (
    <div>  ShowBooking
        <table border={1}>
            {
            booking.map((item,i)=>{
            return (<tr key={i}><td>{item.venue}</td><td>{item.slotcode}</td><td>{item.cmobile}</td></tr>)
                })
            }
        </table>
         </div>
  )
}

export default ShowBooking