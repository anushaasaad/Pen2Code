import React from "react";
import '../Main/style.css';
import Pic from '../Main/p2c.png';
function Content() {
  return (
    <div className="Content">
        <div className="outer">
          hello
          <div className="inner">
            <img src={Pic} />
          </div>

        </div>
     </div>
  );
}

export default Content;
