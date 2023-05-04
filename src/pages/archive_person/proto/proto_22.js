import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import React from 'react';

function Proto_22(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                한지헌
                </p>
            </div>
            <div className='work_name'>
                <p>
                servision_project
                </p>
            </div>
            <div className='work_info'>
                <p>
                servision은 영어 알파벳을 기반으로 시각적 요소를 생성하는 방식으로, 타이포그래피와 미술 요소를 융합합니다. 이를 통해 사용자는 글자와 색상, 패턴을 결합하여 독특한 시각적 언어를 만들 수 있습니다.사용자가 작품에 직접 참여하여 고유한 결과물을 만들어낸다는 점에서, 이 작품은 창작 과정의 개별화를 강조합니다. 각 사용자는 자신만의 독특한 스타일과 선호도를 표현할 수 있습니다.
                </p>
            </div>
            <div className='insta_id'>
                <p>@neohijnah</p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/YlgfKuQ.png'/>
                <img src='https://i.imgur.com/nVjqp4l.png'/>
            </div>
            <div className='web_link'>
                <a href='https://sisoprotoservisionhanjiheon.glitch.me/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_22;