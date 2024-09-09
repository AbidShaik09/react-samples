"use client"
import React from 'react'

const Dashboard = () => {
    const clickHandler = ()=>{
        alert('hi')
    }
  return (
    <div>Dashboard
        <button onClick={clickHandler}>click me</button>
    </div>
  )
}

export default Dashboard