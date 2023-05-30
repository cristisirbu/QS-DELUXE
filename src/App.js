import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    
      <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />

        
        </Routes>
      <Footer />
      </div>
      </Router>
    
  );
}



export default App;
