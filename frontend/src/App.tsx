import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GalleryDetail from './pages/GalleryDetail';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:id' element={<GalleryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
