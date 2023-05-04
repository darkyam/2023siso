import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import React from 'react';


function Proto_7(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    배은환
                </p>
            </div>
            <div className='work_name'>
                <p>
                Feel visually
                </p>
            </div>
            <div className='work_info'>
                <p>
                눈으로 느끼는 새로운 감각, p5js로 구현한 그래픽을 통해 시각 외의 감각을 시각적으로 전달합니다.
                </p>
            </div>
            <div className='insta_id'>
                <p>@ring17ring</p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/0slI9Ym.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://cosmos1217.github.io/Feel_visually/index.html'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_7;