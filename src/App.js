import React from "react";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import Industries from "./pages/industries";

function App() {
  return (
    <>
      <Industries />
    </>
  );
}

function MainLayout() {
  <>
    <Home />
    <About />
    <Industries />
  </>
}

export default App;
