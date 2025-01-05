import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryDetail from "./pages/GalleryDetail";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import AboutUs from "./pages/AboutUs";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/stories" element={<Stories />} />
        <Route path="gallery/:id" element={<GalleryDetail />} />
        <Route path="/story/:id" element={<StoryDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
