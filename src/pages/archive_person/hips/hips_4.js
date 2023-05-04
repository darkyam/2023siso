import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';
// team name - 작가 이름
// work name - 작품 이름
// work info 설명
//inst_id insta
// work img 사진
// function Hips_시트상 순번
// 맨 아래에 export default Hips_시트상 순번;
function Hips_4(){
    return (
        <div className='person_all'>
            <div className='team_name'> 
                <p>
                김지은
                </p>
            </div>
            <div className='work_name'>
                <p>확신
                </p>
            </div>
            <div className='work_info'>
                <p>당신은 어떤 감각으로 자신을 확신하는가. 나는 목격하고, 발음하고, 귀 기울여도 확신할 수 없어 끊임없이 생각만 할 뿐이다.
                </p>
            </div>
            <div className='insta_id'>
                <p></p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/f4tWvVA.jpg'/>
            </div>
        </div>
    )
}

export default Hips_4;