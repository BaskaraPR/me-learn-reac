import { useState } from 'react';
import './App.css';
import Intro from './componen/Intro';
import Butt from './componen/Mybutt';
import Navibar from './componen/Navbar';
import StateButt from './componen/StateButt';

function App() {
  const [getNav, setNav] = useState("")
  
  const changeNav = () =>{
    setNav("Eurobeat 😎")
  }
  return (
    <div className="App">
      <header> 
        <Navibar navValue = {getNav}/>
      </header>
      <button onClick={() => changeNav()}>Add Cool Sunglasses</button>
      <Intro name = 'mas tukam'/>
      <Butt />
      <StateButt />
      <Intro name = 'mas rusdi'/>
    </div>
  );
}

export default App;
