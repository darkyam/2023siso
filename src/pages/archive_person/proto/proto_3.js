import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Proto_3(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                강연우, 한유빈
                </p>
            </div>
            <div className='work_name'>
                <p>
                Methuselah Lab
                </p>
            </div>
            <div className='work_info'>
                <p>
                "Welcome to our lab! 
저희 연구진은 관찰연구을 기억의 왜곡 현상인 무드셀라 증후군을 포착했습니다. 그렇다면 당신의 기억은 온전할까요? 무드셀라는 당신이 모르는 사이 당신의 추억을 왜곡하고 있을지 모릅니다."
                </p>
            </div>
            <div className='insta_id'>
                <p>@yeon_uuu_</p>
                <p>@han._y_b</p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/qvwHTFc.jpeg'/>
                <img src='https://i.imgur.com/lnKHqAr.jpeg'/>
                <img src='https://i.imgur.com/mEOrepb.jpeg'/>
                <img src='https://i.imgur.com/AqdUEYa.jpeg'/>
                <img src='https://i.imgur.com/JkWPso9.jpeg'/>
                <img src='https://i.imgur.com/st3xPVs.jpeg'/>
                <img src='https://i.imgur.com/nEFg9li.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://youtu.be/djlUN4rsZn0'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_3;