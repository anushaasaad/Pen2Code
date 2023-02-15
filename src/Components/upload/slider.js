import React from "react";
import '../upload/style.css';
import { useState } from 'react';
import { SliderData } from './sliderdata.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [file,setFile]=useState('')
    
  const handleChange=(e)=>{
      const data=e.target.files[0]
       setFile(data)
  }
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  
  

  return (
    <div>
    <section className='slider'>
    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
          
        );
      })}
      
    </section>
    <div className="btns">
      <button className="sample">Use this sample</button>
      <button className="U_image">
                <input type="file" onChange={handleChange}/>   
                {file &&
                    <div className="file_image"> 
                        <span>{file.name}</span>
                        <img src={URL.createObjectURL(file)}/>
        </div>  
        }         
       </button>
              
      </div>
    </div>
    
  );
};

export default ImageSlider;
