
import './App.css';
import AddDish from './components/adddish/AddDish';
import Header from './components/header/Header';
import ShowDish from './components/showdish/ShowDish';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    
    <Router>
      <Header/>
        <Routes>
          <Route exat path='/adddish' Component={AddDish}/>
          <Route exat path='/showdish' Component={ShowDish}/>
          <Route path='' element={<b>notfund</b>}/>
        </Routes>
      </Router>
      
  );
}

export default App;
