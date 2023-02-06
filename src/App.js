import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from 'react-router-dom'
import Header from './Components/header/header';
import Main from './Components/Main/main';
import Logo from './logo.PNG';
function App() {
  return (
    <div className="App">
     <Router>
     <nav class="navbar">
        <div class="max-width">
          <div className="Left">
              <img src={Logo}/>
          </div>
          <ul class="menu">
            <li><a href="#">Services</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">FAQ's</a></li>
          </ul>
          <div class="menu-btn">
            <i class="fas fa-bars">
        </i>
			</div>
		</div>
		
	</nav> 
      <Routes>
      <Route path="/" element={Main} />
      
      </Routes>
      </Router>
  </div>
  );
}

export default App;
