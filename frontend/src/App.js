import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './asset/App.css'


function App() {
  return (  
    <div className="centered">
      <h1>Ami Coding Pari Na.</h1>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/find" element={<Home />} />
      </Routes>
    </div>
       
  );
}

export default App;
