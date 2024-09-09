
import React from 'react'
import Button from './Button'

type Props = {}

const AddSlot = (props: Props) => {
   
  return (
    <div>
    date       <input type="text" className='border-4'/><br /> 
    start time      <input type="text" className='border-4'/><br />
    end time      <input type="text" className='border-4'/><br />
      <Button />
    </div>
  )
}

export default AddSlot