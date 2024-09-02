import axios from 'axios'
export default class StockRepo
{
    addStock = (s)=>{
        axios.post('http://localhost:3000/stocks',s)
        }
    getStocks = ()=>{
    axios.get('http://localhost:3000/stocks').then((response)=>{
        //console.log(response.status)
       return  response.data
    })
    .catch((error)=>{
        console.log(error)
    })
} 
modifyStock=(id,stock)=>{
    axios.put(`http://localhost:3000/stocks/${id}`,stock)
}
deleteStock=(id)=>{
    axios.delete(`http://localhost:3000/stocks/${id}`)
}
}
