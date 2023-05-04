import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Yadz_24(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>황서연
                </p>
            </div>
            <div className='work_name'>
                <p>개체 A
                </p>
            </div>
            <div className='work_info'>
                <p>수많은 가능성의 세계가 A를 바라보고 있습니다.
                </p>
            </div>
           <div className='work_img'>
                <img src='https://i.imgur.com/dnhqMND.jpeg'/>
                <img src='https://i.imgur.com/0L4zWmG.jpeg'/>
                <img src='https://i.imgur.com/97PII3l.jpeg'/>
                <img src='https://i.imgur.com/y0E1vfF.jpeg'/>
                <img src='https://i.imgur.com/GO8x8La.jpeg'/>
            </div>
        </div>
    )
}

export default Yadz_24;