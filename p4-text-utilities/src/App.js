import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TextField from './components/TextField';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [theme, setTheme] = useState(false);
  const [iconColor, setIconColor] = useState('black');

  const myStyle = theme ? {
    backgroundColor: '#7E99A3'
  } : {
    backgroundColor: '#D9EAFD'
  };

  return (
    <Router>
      <div className='app' style={myStyle}>
        <Header mode={theme} iColor={iconColor} toggleTheme={() => {
          setTheme(!theme);
          setIconColor(iconColor === 'black' ? 'white' : 'black')
        }
        } />
        <div className='cantainer'>

          <Routes>
            <Route path="*" element={<TextField to="/" />} />
            <Route path='/' element={<TextField heading='Enter Texr Below to Analyse' mode={theme} />} />
            <Route path='/about' element={<About />} />
          </Routes>
          {/* <TextField heading='Enter Texr Below to Analyse' mode={theme} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;



// dark
// ba-colo:#4C585B----header
// ba-colo:#7E99A3----textFile

// Light 
// ba-colo:#BCCCDC----header
// ba-colo:#D9EAFD----textFile