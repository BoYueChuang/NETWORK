import React, { useState } from 'react';
import UnitControl from './components/UnitControl';
import CardFooter from './components/CardFooter';
// eslint-disable-next-line no-unused-vars
import UnitConverter from "./components/UnitConverter";
import './App.css';


function App() {

  const [inputValue, setInputValue] = useState(0);
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />

      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
}

export default App;
