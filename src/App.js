import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';
import Home from './components/Home';
import './styles/Navigation.css';

function App() {
  return (
    <>
      <nav className="navigation">
        <h1>Math Magicians</h1>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Quote">Quotes</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
