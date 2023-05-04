import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import React from 'react';

function Proto_18(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                정나명
                </p>
            </div>
            <div className='work_name'>
                <p>
                Buzzy
                </p>
            </div>
            <div className='work_info'>
                <p>
                혼자하는 공부는 지치니까, Buzzy에서는 함께 성장합니다. 당신의 성장을 위한 모든 스터디를 지금 Buzzy에서 만나보세요.
                </p>
            </div>
            <div className='insta_id'>
                <p>@hnmy_ii</p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/VW4eII7.jpeg'/>
                <img src='https://i.imgur.com/Wvzheny.jpeg'/>
                <img src='https://i.imgur.com/UywlcNL.jpeg'/>
                <img src='https://i.imgur.com/eSyXQHu.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://www.behance.net/gallery/166561737/-buzzy'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_18;