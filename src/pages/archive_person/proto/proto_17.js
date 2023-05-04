import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import React from 'react';

function Proto_17(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                전지연
                </p>
            </div>
            <div className='work_name'>
                <p>
                Mon petit prince
                </p>
            </div>
            <div className='work_info'>
                <p>
                "잘 가 어린 왕자,<br/>
                내가 마지막으로 비밀을 하나 알려줄게 이건 아주 간단해.<br/>
                무엇이든지 마음의 눈으로 볼 때 가장 잘 볼 수 있다는 거야.<br/>
                가장 중요한 것은 눈에 안 보이거든."<br/>
                </p>
            </div>
            <div className='insta_id'>
                <a href='https://www.instagram.com/0esign_/'>@0esign_</a>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/gMVP4qm.jpeg'/>
                <img src='https://i.imgur.com/XhU7qNF.jpeg'/>
                <img src='https://i.imgur.com/3MsaLoz.jpeg'/>
                <img src='https://i.imgur.com/FsZyLBl.jpeg'/>
                <img src='https://i.imgur.com/3fmeZoL.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://readymag.com/monpetitprince/4183239/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_17;