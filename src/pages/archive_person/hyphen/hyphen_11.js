import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Hyphen_12(){
    return (
        <div className='person_all'>
         
            <div className='team_name'>
                <p>강지현
                </p>
            </div>
            <div className='work_name'>
                <p>지금여기
                </p>
            </div>
            <div className='work_info'>
                <p>지금여기는 약속 장소까지의 지루함을 즐거움으로 가득 채운
위치정보시스템&#40;GPS&#41; 기반의 오락형 콘텐츠 셰어링 서비스입니다.
만남을 더욱 편하고, 재미있고, 알차게 채워 보세요!
                </p>
            </div>
            <div className='insta_id'>
                <p>@aprffth</p>
           
            </div>
            <div className='work_img'>
            </div>
            <div className='web_link'>
                <a href='https://www.behance.net/gallery/166443069/_?tracking_source=search_projects%7C%EC%A7%80%EA%B8%88%EC%97%AC%EA%B8%B0'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Hyphen_12;