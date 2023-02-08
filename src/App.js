import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from 'react-router-dom'
import Main from './Components/Main/main.js';
import Upload from './Components/upload/upload.js';
import Logo from './logo.PNG';
function App() {
  return (
    <Router>
    <div className="App">
    <Upload />
    <Routes>
      <Route path="/" element={Main} />
      <Route path="/Try" element={Upload} />
     
      </Routes>
  </div>
  </Router>
  );
}

export default App;
