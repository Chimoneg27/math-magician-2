import React, { useState } from 'react';
import './Calculator.css';
import Buttons from './button';
import calculate from '../logic/calculate';

// const Calculator = () => (
//   <div className="calculator">
//     <div className="outputs">0</div>
//     <div className="keys">
//       <Buttons />
//     </div>
//   </div>
// );

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <div className="calculator">
      <div className="outputs">
        {calculatorData.next || calculatorData.total || '0'}
      </div>
      <div className="keys">
        <Buttons onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
