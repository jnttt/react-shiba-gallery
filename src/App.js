import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Nav from "./components/Nav"
import { useState } from 'react';


function App() {
  const [imgs, setImgs] = useState(null);
  const url = "http://shibe.online/api/shibes?count=100"
  try {
    const response = await fetch(url)
    const data = await response.json()
    setImgs(data)
  } catch (e) {
    console.error(e)
  }
}
  
  return (
    <div className="App">
      <Nav/>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
