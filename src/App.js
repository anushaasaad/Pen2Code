import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from 'react-router-dom'
import Main from './Components/Main/main.js';
import Logo from './logo.PNG';
function App() {
  return (
    <Router>
    <div className="App">
      <Main />
    <Routes>
      <Route path="/" element={Main} />
      </Routes>
  </div>
  </Router>
  );
}

export default App;
