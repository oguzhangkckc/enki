import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/aboutUs";
import Industries from "./pages/industries"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
