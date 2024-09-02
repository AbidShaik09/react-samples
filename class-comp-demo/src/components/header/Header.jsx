import { Component } from "react";
import './Header.css'
export default class Header  extends Component{

    render(){
        return(
            <header>
                Swiggy      
                <ul>
                    <li>Add Dish</li>
                    <li>Show Dish</li>
                </ul>
            </header>
        )
    }

}