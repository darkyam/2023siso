import { useState } from "react";
import Entry from "../pages/Entry";
import Entry_pic from "./entry_pic";
import Title from "./Title";
import Letters from '../img/entry_button_line.png'
import Pics from '../img/entry_button_pic.png'
import './css/entry_change.css'
import twinkle from '../img/mini_twinkle.png'
import './css/title_style.css'

function Entry_change(){
    const [isComponentVisible, setComponentVisibility] = useState(true);
    return (
        <div>
            <div className='title'>
            <div>
                <p><img src={twinkle}/>Entry
              </p>
            </div>
            <hr/>
            <button className='button' onClick={() => setComponentVisibility(!isComponentVisible)}>
                    <img src={isComponentVisible ? Letters : Pics}/>
                </button>
        </div>

        <br/>
        <br/>

        {isComponentVisible && <Entry/>}
        {!isComponentVisible && <Entry_pic/>}
           
      </div>
    )
}

export default Entry_change;