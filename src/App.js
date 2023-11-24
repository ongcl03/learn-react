import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/contact" element={<Contact />}/>

          {/* Use * for not exist page */}
          <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}








export default App;
