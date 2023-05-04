import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Hips_8(){
    return (
        <div className='person_all'>
            <div className='team_name'> 
                <p>
                도우승
                </p>
            </div>
            <div className='work_name'>
                <p>발
                </p>
            </div>
            <div className='work_info'>
                <p>이전엔 손을 찍었고, 이번엔 발을 찍었다.<br/>
신체의 미감. 익숙함. 감각적 납득. 경계. 미학적 접근. 본질 탐구. 이끌림. 반복. 또 반복.
                </p>
            </div>
            <div className='insta_id'>
                <p></p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/xltvQj2.jpg'/>
            </div>
        </div>
    )
}

export default Hips_8;