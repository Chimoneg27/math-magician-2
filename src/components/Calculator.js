import React, { useState } from 'react';
import '../styles/Calculator.css';
import Buttons from './button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newCalculatorState = calculate(calculatorState, buttonName);
    setCalculatorState(newCalculatorState);
  };

  return (
    <div className="container">
      <div className="text">
        <h1>Lets Do Some Math!</h1>
      </div>
      <div className="calculator">
        <div className="outputs">
          {calculatorState.next || calculatorState.total || '0'}
        </div>
        <div className="keys">
          <Buttons clickHandler={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
