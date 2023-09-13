import PropTypes from 'prop-types';

const Buttons = ({ clickHandler }) => (
  <div className="rows">
    <div className="row1">
      <button type="button" onClick={() => clickHandler('AC')}>AC</button>
      <button type="button" onClick={() => clickHandler('+/-')}>+/-</button>
      <button type="button" onClick={() => clickHandler('%')}>%</button>
      <button type="button" className="far-right" onClick={() => clickHandler('÷')}>÷</button>
    </div>
    <div className="row1">
      <button type="button" onClick={() => clickHandler('7')}>7</button>
      <button type="button" onClick={() => clickHandler('8')}>8</button>
      <button type="button" onClick={() => clickHandler('9')}>9</button>
      <button type="button" className="far-right" onClick={() => clickHandler('x')}>x</button>
    </div>
    <div className="row1">
      <button type="button" onClick={() => clickHandler('4')}>4</button>
      <button type="button" onClick={() => clickHandler('5')}>5</button>
      <button type="button" onClick={() => clickHandler('6')}>6</button>
      <button type="button" className="far-right" onClick={() => clickHandler('-')}>-</button>
    </div>
    <div className="row1">
      <button type="button" onClick={() => clickHandler('1')}>1</button>
      <button type="button" onClick={() => clickHandler('2')}>2</button>
      <button type="button" onClick={() => clickHandler('3')}>3</button>
      <button type="button" className="far-right" onClick={() => clickHandler('+')}>+</button>
    </div>
    <div className="bottom">
      <button type="button" className="zero" onClick={() => clickHandler('0')}>0</button>
      <button type="button" className="point" onClick={() => clickHandler('.')}>.</button>
      <button type="button" className="far-right" onClick={() => clickHandler('=')}>=</button>
    </div>
  </div>
);

Buttons.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Buttons;
