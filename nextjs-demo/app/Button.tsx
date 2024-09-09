"use client"
import React from 'react'

type Props = {}

const Button = (props: Props) => {
    const addHandler=()=>{
        alert('hi')
    }
  return (
    <button className='btn bg-cyan-300 shadow-md p-3' onClick={addHandler}>Add</button>
  )
}

export default Button