import logo from './logo.svg';
import './App.css';
import ShowBooking from './components/showbooking/ShowBooking';
import { BookingProvider } from './context/BookingContext';
import AddBooking from './components/addbooking/AddBooking';
import Header from './components/Header/Header';

function App() {
  return (
    <BookingProvider>
      <Header/>
        <AddBooking/>
        <ShowBooking/>
    </BookingProvider>
  
    
  );
}

export default App;
