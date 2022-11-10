import React, {useState} from 'react'
import Header from './components/header/header';
import Keypad from './components/keypad/keypad';
import './App.css';
import moonIcon from "./assests/moon.png"
import sunIcon from "./assests/sun.png"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className="App" data-theme={darkMode? "dark" : ""}>
      <div className='calculator'>
        <div className='navbar'>
          <div className='navbar-toggle' onClick={()=> setDarkMode(!darkMode)}>
            <div className={`navbar-circle ${darkMode ? "navbar-circle-active" : ""}`} >
              <img src={darkMode ? moonIcon : sunIcon} alt="mode"/>

            </div>
          </div>
        </div>
        <Header />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
