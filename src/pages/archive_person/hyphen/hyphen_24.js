import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Hyphen_24(){
    return (
        <div className='person_all'>
          
            <div className='team_name'>
                <p>김서현 민솔 임나경 윤유빈
                </p>
            </div>
            <div className='work_name'>
                <p>Dear ME
                </p>
            </div>
            <div className='work_info'>
                <p>Dear ME는 당신의 일상에 추억이 작은 위로가 될 수 있도록, 추억이 담긴 타임캡슐을 받아볼 수 있는 서비스입니다. 
노스탤지어를 통한 아날로그 방식으로 지난 추억을 처방해드립니다.

<br/> <br/>Dear You, Dear Me, Dear Memories
                </p>
            </div>
            <div className='insta_id'>
                <p>@_uiqnh<br/>@milkcreambread<br/>@s.ol_o0<br/>
                <a href='https://www.behance.net/ngi1'>○behance</a></p>

            </div>
            <div className='work_img'>
            <img src='https://i.imgur.com/VlMCB5Q.jpg'/>
            <img src='https://i.imgur.com/Z6g3zjA.jpg'/>
            <img src='https://i.imgur.com/gpCX9w1.jpg'/>
            <img src='https://i.imgur.com/PCfCJVz.jpg'/>
            <img src='https://i.imgur.com/ETUPMEH.jpg'/>
            <img src='https://i.imgur.com/hytFBtl.jpg'/>
            </div>
            <div className='web_link'>
                <a href='https://www.behance.net/gallery/166424029/Dear-ME-Timecapsule-Service'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Hyphen_24;