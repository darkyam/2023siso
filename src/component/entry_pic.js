import { useState } from "react";
import React from "react";
import './css/entry_pic_style.css'
import { Link } from "react-router-dom";
import Load1 from '../img/entry_pic/load/loading_1.jpg'
import Load2 from '../img/entry_pic/load/loading_2.jpg'
import Load3 from '../img/entry_pic/load/loading_3.jpg'
import Load4 from '../img/entry_pic/load/loading_4.jpg'
import Load5 from '../img/entry_pic/load/loading_5.jpg'
import Load6 from '../img/entry_pic/load/loading_6.jpg'
import Load7 from '../img/entry_pic/load/loading_7.jpg'
import Load8 from '../img/entry_pic/load/loading_8.jpg'
import Load9 from '../img/entry_pic/load/loading_9.jpg'
import Ins1 from '../img/entry_pic/main/INSTA_.jpg'
import Ins2 from '../img/entry_pic/main/INSTA_1.jpg'
import Ins3 from '../img/entry_pic/main/INSTA_2.jpg'
import Ins4 from '../img/entry_pic/main/INSTA_3.jpg'
import Ins5 from '../img/entry_pic/main/INSTA_4.jpg'
import Ins6 from '../img/entry_pic/main/INSTA_5.jpg'
import Ins7 from '../img/entry_pic/main/INSTA_6.jpg'
import Ins8 from '../img/entry_pic/main/INSTA_7.jpg'
import Ins9 from '../img/entry_pic/main/INSTA_8.jpg'

function Entry_pic() {
    const [images, setImages] = useState([
        Ins1,
        Ins2,
        Ins3,
        Ins4,
        Ins5,
        Ins6,
        Ins7,
        Ins8,
        Ins9,
    ]);
      const [hoveredImage, setHoveredImage] = useState([
        Load1,
        Load2,
        Load3,
        Load4,
        Load5,
        Load6,
        Load7,
        Load8,
        Load9,
      ]);
    
      const handleClick = (event) => {
        const image = event.target.getAttribute("src");
        setHoveredImage(image);
      };
    
      return (
        <div>
            <br/>
            
        <div className="grid-container">
          {images.map((image) => (
            <img
              key={image}
              src={image}
              alt={image}
              className={hoveredImage === image ? "hovered" : ""}
              onClick={handleClick}
            />
          ))}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>

      );
    };
export default Entry_pic;