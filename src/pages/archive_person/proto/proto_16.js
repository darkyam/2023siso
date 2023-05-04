import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import React from 'react';


function Proto_16(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                장민주
                </p>
            </div>
            <div className='work_name'>
                <p>
                Oddly Unsatisfying
                </p>
            </div>
            <div className='work_info'>
                <p>
                당신을 불편하게 만드는 것들. 조심하세요! 짜증날 수도 있습니다.
                </p>
            </div>
            <div className='insta_id'>
                <a href='https://www.linkedin.com/in/minjujang/'>@mjwkd</a>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/WjqC41W.jpeg'/>
                <img src='https://i.imgur.com/MsvbxuL.jpeg'/>
                <img src='https://i.imgur.com/vAWIYmv.jpeg'/>
                <img src='https://i.imgur.com/EV75axc.jpeg'/>
                <img src='https://i.imgur.com/XlaaSSs.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://readymag.com/u3884507660/oddlyunsatisfying/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_16;