import React from "react";
import '../Main/style.css';
import Pic from '../Main/p2c.jpg';
function Content() {
  return (
    <div className="Content">
        <div className="outer">
          <div className="inner">
            <img src={Pic} />
            </div>

        </div>
     </div>
  );
}

export default Content;
