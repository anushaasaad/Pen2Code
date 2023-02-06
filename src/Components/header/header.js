import React from "react";
import '../header/style.css';
import Logo from '../header/logo.PNG';
import Main from '../Main/main.js';
import Çontent from '../Main/content.js';
import Content from "../Main/content.js";
function Header() {
  return (
    <div className="App">
		<div className="class">
			<Main />
			<Content />
		</div>
     </div>
  );
}

export default Header;
