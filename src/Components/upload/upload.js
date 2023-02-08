import React from "react";
import '../upload/style.css';
import Header from "../header/header.js";
import ImageSlider from './slider.js';
import { SliderData } from './sliderdata.js'

function Upload() {
  return (
    <div class="Upload">
        <Header />
        <div className="sec">
            <div className="max-width">
                <ImageSlider slides={SliderData} />
                 </div>
            </div>
        </div>
  );
}

export default Upload;
