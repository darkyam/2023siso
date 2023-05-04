import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Hyphen_10(){
    return (
        <div className='person_all'>
        <div className='work_img'>
            <a href='https://www.behance.net/gallery/166347899/Pollzzak-IT-'>
                <img src='https://i.imgur.com/JREdyiu.jpg'/>
            </a>
        </div>

            <div className='team_name'>
                <p>김가영
                </p>
            </div>
            <div className='work_name'>
                <p>Pollzzak
                </p>
            </div>
            <div className='work_info'>
                <p>폴짝&#40;Pollzzak&#41;은 it 직무를 꿈꾸는 대학생들이 지식을 공유하고, 
네트워크를 형성할 수 있는 커리어 커뮤니티입니다.
폴짝과 함께 it 커리어를 시작하세요!
                </p>
            </div>
            <div className='insta_id'>
                <a href='https://www.behance.net/gayoungok1a21'>○behance</a>
            </div>
            <div className='work_img'>
                <img src=''/>
            </div>
         
        </div>
    )
}

export default Hyphen_10;