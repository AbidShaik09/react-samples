import React, { useContext, useState } from 'react'
import { SlotContext } from '../../context/SlotsContext'

const CreateSlot = () => {
    const slcontext = useContext(SlotContext)
    const {setSlots,slots} = slcontext
    const [date,setDate] = useState()
    const [stime,setStime] = useState()
    const [etime,setEtime] = useState()
   const saveHandler = ()=>{
        setSlots([...slots,{'date':date,'stime':stime,'etime':etime}])
    }
  return (
    <div>
    date      <input type="text" value={date} onChange={(e)=>{setDate(e.target.value)}}/> <br />
   start time     <input type="text"  value={stime} onChange={(e)=>{setStime(e.target.value)}}/> <br />
   end time <input type="text" value={etime} onChange={(e)=>{setEtime(e.target.value)}} /> <br />
   <button onClick={saveHandler}>Save</button>
    </div>
  )
}

export default CreateSlot