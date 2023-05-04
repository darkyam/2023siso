import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Yadz_15(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>유희연
                </p>
            </div>
            <div className='work_name'>
                <p>가능세계 시뮬레이터
                </p>
            </div>
            <div className='work_info'>
                <p>차세대 인공지능을 중심으로 혜성같이 나타난 가능세계 시뮬레이터. 원하는 결과가 실행된 가능세계를 인공지능이 분석하여 그대로 보여줍니다. 엄청난 정확도를 자랑하는 이 기계와 함께라면 뭐든 이룰 수 있습니다. 보고, 느끼고, 빠져드세요.
                </p>
            </div>
            <div className='insta_id'>
                <a href='https://www.instagram.com/yuyuyeon_/'>
                @yuyuyeon_
                </a>
            </div>
            <div className='work_img'>
            <img src='https://i.imgur.com/onNblDz.jpeg'/>
            <img src='https://i.imgur.com/wm57LzM.jpeg'/>
            <img src='https://i.imgur.com/iDOjoYu.jpeg'/>
            <img src='https://i.imgur.com/JOj5BkC.jpeg'/>
            <img src='https://i.imgur.com/K8B3Aex.jpeg'/>
            <img src='https://i.imgur.com/8mbDhlD.jpeg'/>
            <img src='https://i.imgur.com/H6g1gaG.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://posty.pe/ep3nf5'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Yadz_15;