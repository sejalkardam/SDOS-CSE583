import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import TestPage from './pages/TestPage';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Navbar />
      <TestPage />
    </div>
  );
}

export default App;
