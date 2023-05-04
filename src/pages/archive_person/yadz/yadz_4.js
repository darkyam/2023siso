import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Yadz_4(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                김재순
                </p>
            </div>
            <div className='work_name'>
                <p>
Pop Order
                </p>
            </div>
            <div className='work_info'>
                <p>
                팝아트와 그리스 로마시대 주범양식의 만남. 문의 형태에 기반한 재조합. 
                </p>
            </div>
            <div className='insta_id'>
                <p>@tnssoon</p>
            </div>
            <div className='work_img'>
            <img src='https://i.imgur.com/0Rlyzs0.jpeg'/>
            <img src='https://i.imgur.com/ol8jbGk.jpeg'/>
            <img src='https://i.imgur.com/ABt7Pbj.jpeg'/>
            <img src='https://i.imgur.com/X3aFdt0.jpeg'/>
            <img src='https://i.imgur.com/hJpQDDs.jpeg'/>
            <img src='https://i.imgur.com/Z6Z0Nbd.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://www.instagram.com/tnssoon/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Yadz_4;