import './Calculator.css';
import Buttons from './button';

const Calculator = () => (
  <div className="calculator">
    <div className="outputs">0</div>
    <div className="keys">
      <Buttons />
    </div>
  </div>
);

export default Calculator;
