import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Hyphen_21(){
    return (
        <div className='person_all'>
       
            <div className='team_name'>
                <p>박소현 정세진 최서인
                </p>
            </div>
            <div className='work_name'>
                <p>FOR OUR
                </p>
            </div>
            <div className='work_info'>
                <p>For our Earth, For our Lovers, FOR OUR<br/>
FOR OUR는 주는 이와 받는 이, 그리고 환경을 동시에 고려하는 플라워샵입니다. 부담 없는 커스텀 주문 과정과, 포장지를 제거한 꽃다발, 손쉬운 꽃 관리방법까지, 꽃으로 마음을 전하는 의미있는 경험을 통해 더 많은 마음이 기억될 수 있는 세상을 꿈꿉니다. FOR OUR와 함께 마음을 온전히 담은 꽃을 선물해보세요.
<br/>우리의 환경, 그리고 우리가 사랑하는 사람들을 위해. FOR OUR
                </p>
            </div>
            <div className='insta_id'>
                <p>@outruleu<br/>@tol1_z
<br/>@sseo_inn</p>
            </div>
            <div className='web_link'>
                <a href='https://www.figma.com/proto/iRvUiAYxflEDcZTBFBLQUL/%EC%9B%B9%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?page-id=0%3A1&node-id=1-732&viewport=180%2C7201%2C0.21&scaling=scale-down'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Hyphen_21;