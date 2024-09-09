import { useState, createContext } from "react";
export const SlotContext = createContext();
export const SlotProvider = (props)=>{
const [slots,setSlots] = useState([{date:'12-jul-2024',stime:'12:00',etime:'13:00'}])
return (
    <SlotContext.Provider value={{slots,setSlots}}>
        {props.children}
    </SlotContext.Provider>
);
}