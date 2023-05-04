import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Hyphen_14(){
    return (
        <div className='person_all'>
  
            <div className='team_name'>
                <p>백송은 진나경 정시윤 최영재
                </p>
            </div>
            <div className='work_name'>
                <p>엘리보드
                </p>
            </div>
            <div className='work_info'>
                <p>엄마 아빠! 학교에서 이럴 땐 어떻게 해야돼요?<br/>
아이들에게 초등학교 입학이란 궁금한 것 투성이에요.
학교가는길은 초등학교 입학을 앞둔 아이들이 초등학교라는 새로운 환경에
보다 더 쉽게 적응할 수 있도록 도움을 주기 위해 탄생했어요.<br/>

모든 것이 새로울 아이들에게 학교생활을 살짝 보여주면 어떨까요?
엘리보드에서는 등교부터 하교까지 초등학교에서 일어나는
다양한 상황들에 대처하는 방법을 미리 경험해볼 수 있어요.<br/>

첫 등교가 기다려질 수 있도록 학교가는길의 엘리보드가 함께할게요!
                </p>
            </div>
            <div className='insta_id'>
                <p>@100_2920 <br/>@na568._.kyung
<br/>@poemlish<br/>@hambaga</p>
            </div>

         
            <div className='web_link'>
                <a href='https://www.behance.net/gallery/166476335/ELEBOARD-Boardgame-Brand-for-pre-elementary-school'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Hyphen_14;