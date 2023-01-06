import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Notes from "./pages/Notes";
import About from "./pages/About";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/submit' exact element={<Submit />} />
          <Route path='/notes' exact element={<Notes />} />
          <Route path='/about' exact element={<About />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
