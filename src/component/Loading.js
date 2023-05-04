import React from 'react';
import Loadsiso from '../img/siso_load.gif'
import { useState, useEffect } from 'react';
import App from '../App';
import './css/load_style.css'

function Loading(){
    return (
        <div className="image-container">
            <img src={Loadsiso}/>
        </div>
    )

}

export default Loading;