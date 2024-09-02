import { Component } from "react";
 
import ShowDish from "../ShowDish/ShowDish";
export default class AddDish extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:0,
            name:'',
            price:0,
            dishes:[{'id':1,'name':'panner masala','price':123},{'id':2,'name':'chicken masala','price':45}]
        }
        this.addHandler.bind(this)
    }
    addHandler = ()=>{
        this.setState({dishes:[...this.state.dishes,{id:this.state.id,name:this.state.name,price:this.state.price}]})
    }
    nameChange = (e)=>{
        this.setState({name: e.target.value})
    }
   showCount = (p)=>{
    alert(p)
   }
    render(){
         return(
            <div>
            ID    <input type="text"  value={this.state.id} onChange={(e)=>{this.setState({id:e.target.value})}}/> <br />
            Name     <input type="text"  value={this.state.name} onChange={this.nameChange}/> <br />
            Price   <input type="text" value = {this.state.price} onChange={(e)=>{this.setState({price:e.target.value})}}/>
           <button onClick={this.addHandler}>Add</button>
            <ShowDish dishes={this.state.dishes} showCount={this.showCount}/>
            </div>
         )
    }
}