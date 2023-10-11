import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      {/* <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/flavors">Flavors</Link>
            </li>
            <li>
            <Link to="/categories">ategories</Link>
            </li>
          </ul>
        </nav>
      </header> */}
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <nav>
          <li>
            
          </li>
        </nav>
      </header> */}
      <Navbar />
    </div>
  );
}

export default App;
