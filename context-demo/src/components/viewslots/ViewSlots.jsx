import React, { useContext } from 'react'
import { SlotContext } from '../../context/SlotsContext'

const ViewSlots = () => {
  const slotcontext = useContext(SlotContext)
  const {slots} = slotcontext
  return (
    <div>ViewSlots
      <table>
        {slots.map((item,i)=>{
          return(<tr key={i}><td>{item.date}</td><td>{item.stime}</td><td>{item.etime}</td></tr>)
        })}
      </table>
    </div>
  )
}

export default ViewSlots