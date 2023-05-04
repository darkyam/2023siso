import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Hyphen_28(){
    return (
        <div className='person_all'>
            
            <div className='team_name'>
                <p>윤서윤 윤시은 이채은 최선우
                </p>
            </div>
            <div className='work_name'>
                <p>MANDAL-ABLE
                </p>
            </div>
            <div className='work_info'>
                <p>매번 목표를 세워도 흐지부지 되기 쉽고, 꾸준한 실천이 어렵나요? 만다라트를 이용한 블럭 쌓기로 더 재밌게 목표를 달성해봐요! 머나먼 목표를 향한 오늘의 블럭 쌓기, 만다라블과 함께해요!
                </p>
            </div>
            <div className='insta_id'>
            <p>@seoyunss<br/>@syxeun_
<br/>@color_sepia<br/>@ssun_1052_w</p>
            </div>
            <div className='web_link'>
                <a href='https://www.behance.net/gallery/168488715/MANDAL-ABLE'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Hyphen_28;