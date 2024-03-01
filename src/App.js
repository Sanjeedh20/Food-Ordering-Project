import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './Component/Login';
import Forget from './Component/Forget';
import Sign from './Component/Sign';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
function App() {
  return (
    <div className="App">
    
      <Navbar />
       <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/menu" exact element={<Menu />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/forgot" exact element={<Forget />} />
      <Route path="/signup" exact element={<Sign />} />
      </Routes>
      <Footer /> 
  </div>
  );
}

export default App;
