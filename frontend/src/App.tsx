import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <Homepage />
    </div>
  );
}

export default App;
