import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import React from 'react';

function Proto_8(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                신유승
                </p>
            </div>
            <div className='work_name'>
                <p>
                AKASHIC
                </p>
            </div>
            <div className='work_info'>
                <p>
                지구가 멸망했습니다. 인류는 어떻게 기억되어야 할까요?
                </p>
            </div>
            <div className='insta_id'>
                <p>@seung2seung2_</p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/IwyiKug.jpeg'/>
                <img src='https://i.imgur.com/H6o29Am.jpeg'/>
                <img src='https://i.imgur.com/Dyw0yL6.jpeg'/>
                <img src='https://i.imgur.com/UxLRmoc.jpeg'/>
                <img src='https://i.imgur.com/t2c6PxU.jpeg'/>
                <img src='https://i.imgur.com/H5do6G0.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://youtu.be/MMiLwMu0YHo'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_8;