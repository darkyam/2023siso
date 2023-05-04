import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Yadz_6(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
류정현
                </p>
            </div>
            <div className='work_name'>
                <p>
Open!
                </p>
            </div>
            <div className='work_info'>
                <p>
                내가 꿈꾸던, 내가 노래하던, 내가 소망하던, 그곳으로
                </p>
            </div>
            <div className='insta_id'>
                <p>
                @ryuu._.j
                </p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/MRe7Xup.jpeg'/>
                <img src='https://i.imgur.com/Dkdy2cP.jpeg'/>
                <img src='https://i.imgur.com/bn72EU0.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://www.instagram.com/ryuu._.j/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Yadz_6;