import React, { useEffect, useState } from 'react'
 import axios from 'axios'

    const ShowStocks = ()=> {
    const [stocks,setStocks] = useState([])
    useEffect(()=>
    {
     axios.get('http://localhost:3000/stocks').then((response)=>{
        setStocks(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })},[])

    return (    
        <div>
            <table border={1}>
                <tr><td>Code</td><td>Name</td><td>Face Value</td> <td>IpValue</td><td>Action</td></tr>
               { 
               stocks.map((s,i)=>{
                    return (<tr key={i}>
                        <td>{s.id}</td><td>{s.name}</td><td>{s.facevalue}</td><td>{s.ipvalue}</td>
                        <td><button >Delete</button></td>
                        </tr>)
                })
            }
            </table>
         
     </div>
  )
}
export default ShowStocks   
