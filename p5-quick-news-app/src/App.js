import './App.css';
import { useState,useEffect } from 'react';
import NavBar from './components/NavBar';
import NewsArea from './components/NewsArea';
import MiniNavBar from './components/MiniNavBar';


function App() {

  // const [mode, setMode] = useState(false);

  const [category, setCategory] = useState('General');
  const [countryName, setCountryName] = useState('');
  const [keyWord,setKeyWord]=useState(null);
  const [mode,setMode]=useState(false);

  useEffect(()=>{
  },[keyWord,mode]);

  const handleCategoryChange = (categoryType) => {
    setCategory(categoryType);
  }

  const handleCountryChange=(country)=>{
    setCountryName(country);
  }

  const handleKeyWordChange=(getKeyword)=>{
    setKeyWord(getKeyword);
  }

  const handleModeChange=(trueOrFalse)=>{
    setMode(trueOrFalse);
    
  }


  // const handleDarkMode=(modeType)=>{
  //   setMode(modeType);
  // }


  return (
    <div className="App">
      <NavBar
        darkMode={mode}
        category={category}
        onCountryChange={handleCountryChange}
        onKeyWordEnter={handleKeyWordChange}
        onModeChange={handleModeChange}
      />
      <MiniNavBar
        darkMode={mode}
        category={category}
        onCategoryChange={handleCategoryChange} 

      />
      <NewsArea
        darkMode={mode}
        category={category}
        countryName={countryName}
        keyWord={keyWord}
      />
    </div>
  );
}

export default App;
