import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import AddDish from './components/AddDish/AddDish';
import ShowDish from './components/ShowDish/ShowDish';

function App() {
  return (
    <div className="App">
       <Header/>
       <AddDish />
        
    </div>
  );
}

export default App;
