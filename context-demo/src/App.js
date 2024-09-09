import logo from './logo.svg';
import './App.css';
import CreateSlot from './components/createslot/CreateSlot';
import ViewSlots from './components/viewslots/ViewSlots';
import { SlotProvider } from './context/SlotsContext';
import Header from './components/Header/Header';
 

function App() {
  return (
    
      <SlotProvider>
      <Header/>
      <CreateSlot/>
      <ViewSlots/>
      </SlotProvider>
    
  );
}

export default App;
