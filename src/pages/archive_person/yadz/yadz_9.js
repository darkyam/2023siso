import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Yadz_9(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>성연우
                </p>
            </div>
            <div className='work_name'>
                <p>Karaoke Eighteen
                </p>
            </div>
            <div className='work_info'>
                <p>
                당신의 노래방 메이트 'Eighteen'이 맞이하는 그 곳, Karaoke Eighteen!
                </p>
            </div>
            <div className='insta_id'>
                <p>@nu.nuia</p>
            </div>
            <div className='work_img'>
            <img src='https://i.imgur.com/9G6LPIo.jpeg'/>
            <img src='https://i.imgur.com/0OX86NS.jpeg'/>
            <img src='https://i.imgur.com/K1VVkT4.jpeg'/>
            <img src='https://i.imgur.com/gDBpU99.jpeg'/>
            <img src='https://i.imgur.com/W8Oi3LE.jpeg'/>
            <img src='https://i.imgur.com/5ZXRUJm.jpeg'/>
            <img src='https://i.imgur.com/QGmf9u7.jpeg'/>
            <img src='https://i.imgur.com/ZJEMEJC.jpeg'/>
            <img src='https://i.imgur.com/TxEMvTL.jpeg'/>
            <imge src='https://i.imgur.com/Axmwv0l.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://www.instagram.com/nu.nuia/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Yadz_9;