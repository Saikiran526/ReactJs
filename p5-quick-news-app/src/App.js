import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import NewsArea from './components/NewsArea';
import MiniNavBar from './components/MiniNavBar';


function App() {

  const [mode, setMode] = useState(false);

  const [category, setCategory] = useState('General');

  const handleCategoryChange = (categoryType) => {
    setCategory(categoryType);
  }

  // const handleDarkMode=(modeType)=>{
  //   setMode(modeType);
  // }


  return (
    <div className="App">
      <NavBar
        category={category}
        darkMode={mode}
        />
      <MiniNavBar
        category={category}
        onCategoryChange={handleCategoryChange} />
      <NewsArea
        category={category}
        darkMode={mode}  />
    </div>
  );
}

export default App;
