import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import React from 'react';

function Proto_5(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                김나언
                </p>
            </div>
            <div className='work_name'>
                <p>
                Apple!
                </p>
            </div>
            <div className='work_info'>
                <p>
                과일의 한 종류인 Kim Apple은 장미군 장미목에 속하는 Apple_tree 의 열매이다. Kim Apple은 과일의 한 종류이며, 붉은 껍질과 상앗빛 과육이 특징이다. Kim Apple의 맛은 품종마다 다르다.
                </p>
            </div>
            <div className='insta_id'>
                <a href='https://youtu.be/UDniwl7plUg'>@bbling__1009_</a>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/1GCd8st.jpeg'/>
                <img src='https://i.imgur.com/7HnbdNJ.jpeg'/>
                <img src='https://i.imgur.com/5Uv2Gqa.jpeg'/>
                <img src='https://i.imgur.com/BfuqCK8.jpeg'/>

            </div>
            <div className='web_link'>
                <a href='https://kimnaeon.github.io/fghfhd/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_5;