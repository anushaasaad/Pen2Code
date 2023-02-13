import React from "react";
import '../Main/style.css';
import Content from "./content.js";
import Tech from './techstack.js'
import Header from '../header/header.js';
import Footer from '../header/footer.js';
import { useNavigate } from "react-router";
function Main() {

  return (
    <div class="hero">
      <Header />
    <div className="main">
        <div className="max-width">
            <div className="box">
                <h2>Pen2Code</h2>
                <p>An AI-based web application to write boilerplate code. Converts hand-drawn mockup images into HTML webpages.</p>
            </div>
            <div className="button">
              <p><a href="http://localhost:3000/upload">Try out Pen2Code</a> </p>
              </div>
            
        </div>
       <Content />
       <Tech />
       <Footer />
     </div>
     
     </div>
  );
}

export default Main;
