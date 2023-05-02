import React from 'react';
import loadsiso from '../img/siso_load.gif'
import Foot_loading from './Foot_loading';
import App from '../App';

function Loading(){
    return (
        <div>
            <Foot_loading/>
            <img src={loadsiso} onClick={App}/>
        </div>
    )

}

export default Loading;