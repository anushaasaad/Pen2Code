import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from 'react-router-dom'
import Header from './Components/header/header';
import Main from './Components/Main/main';

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
      <Routes>
      <Route path="/" element={Main} />
      
      </Routes>
      </Router>
  </div>
  );
}

export default App;
