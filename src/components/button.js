// const Buttons = () => (
//   <div className="rows">
//     <div className="row1">
//       <button type="button">AC</button>
//       <button type="button">+/-</button>
//       <button type="button">%</button>
//       <button type="button" className="far-right">÷</button>
//     </div>
//     <div className="row1">
//       <button type="button">7</button>
//       <button type="button">8</button>
//       <button type="button">9</button>
//       <button type="button" className="far-right">x</button>
//     </div>
//     <div className="row1">
//       <button type="button">4</button>
//       <button type="button">5</button>
//       <button type="button">6</button>
//       <button type="button" className="far-right">-</button>
//     </div>
//     <div className="row1">
//       <button type="button">1</button>
//       <button type="button">2</button>
//       <button type="button">3</button>
//       <button type="button" className="far-right">+</button>
//     </div>
//     <div className="bottom">
//       <button type="button" className="zero">0</button>
//       <button type="button" className="point">.</button>
//       <button type="button" className="far-right">+</button>
//     </div>
//   </div>
// );
import PropTypes from 'prop-types';

const Buttons = ({ onClick }) => {
  const handleButtonClick = (buttonName) => {
    onClick(buttonName);
  };

  return (
    <div className="rows">
      <div className="row1">
        <button type="button" onClick={() => handleButtonClick('1')}>1</button>
        <button type="button" onClick={() => handleButtonClick('2')}>2</button>
        <button type="button" onClick={() => handleButtonClick('3')}>3</button>
        <button type="button" className="far-right">÷</button>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
