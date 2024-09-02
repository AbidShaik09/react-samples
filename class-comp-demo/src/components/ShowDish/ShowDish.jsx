import { Component } from "react";
export default class ShowDish extends Component{
 constructor(props){
    super(props)
   
 }
 countHandler = ()=>{
    this.props.showCount(3)
 }
    render(){      
        return(<div>
             <table border={1}>
                {this.props.dishes.map(d=>
                {
                 return(   <tr key={d.id}><td>{d.id}</td><td>{d.name}</td><td>{d.price}</td></tr>)
                })
            }
             </table>
             <button onClick={this.countHandler}>Count</button>
        </div>)
    }
}