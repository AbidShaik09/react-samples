
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CreateSlot from './components/slotmanagement/CreateSlot';
import Booking from './components/booking/Booking';
import Menu from './components/navbar/Menu';
import Login from './components/login/Login';
function App() {
  return (
     <Router>
      <Menu/>
      <Routes>
        <Route path='/create-slot' element={<CreateSlot/>}/>
        <Route path='/book-slot' Component={Booking}/>
        <Route path='/login/:id/:name' Component={Login}/>
        <Route path='' element={<h1>HOme</h1>}/>
        <Route path='*' element={<h1>NOt Found</h1>}/>
      </Routes>
     </Router>
  );
}

export default App;
