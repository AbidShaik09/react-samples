import React, {  createContext, useState } from 'react'
export const BookingContext = createContext();

export const BookingProvider = ({children}) => {
    const [booking,setBooking] = useState([{venue:'Karthika',slotcode:1,cmobile:'9988776655'}])
  return (
    <BookingContext.Provider value={{booking,setBooking}}>
        {children}
    </BookingContext.Provider>
  )
}

