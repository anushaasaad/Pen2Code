import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from 'react-router-dom'
import Main from './Components/Main/main.js';
import Upload from './Components/upload/upload.js';
import Logo from './logo.PNG';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/"  element={<Main />} />
      <Route path="/Upload" element={<Upload />} />
      </Routes>
          </div>
    </BrowserRouter>

  );
}

export default App;
