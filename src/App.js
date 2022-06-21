import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />, <h1>I am a checkout page</h1>]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
