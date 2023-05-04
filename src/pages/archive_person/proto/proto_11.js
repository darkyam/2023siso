import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import React from 'react';

function Proto_11(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                오승주
                </p>
            </div>
            <div className='work_name'>
                <p>
                오히려좋아
                </p>
            </div>
            <div className='work_info'>
                <p>
                해학을 통해 삶을 더욱 유쾌하게 만들었던 우리 민족들의 순간을 포착합니다. 오히려좋아!
                </p>
            </div>
            <div className='insta_id'>
                <a href='https://www.instagram.com/ohhiryeo_joa/'>@ohhiryeo_joa</a>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/RtBK4L8.jpeg'/>
                <img src='https://i.imgur.com/zjHkdME.jpeg'/>
                <img src='https://i.imgur.com/Bm7gW0T.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://www.ohhiryeo-joa.com/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_11;