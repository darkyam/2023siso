import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import React from 'react';

function Proto_13(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                윤희서
                </p>
            </div>
            <div className='work_name'>
                <p>
                제 5단계 수면
                </p>
            </div>
            <div className='work_info'>
                <p>
                :역설수면. 이번 잠은 꿈의 단계인 역설수면의 단계로 바로 진입합니다.산호초들이 사는 꿈의 바다 속으로 들어가보세요
                </p>
            </div>
            <div className='insta_id'>
                <p>@unicoonart</p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/zVYBcWf.jpeg'/>
                <img src='https://i.imgur.com/BnNbouZ.jpeg'/>
                <img src='https://i.imgur.com/tu6pGU6.jpeg'/>
                <img src='https://i.imgur.com/0cwJqt9.jpeg'/>
                <img src='https://i.imgur.com/k0ZO49U.jpeg'/>
                <img src='https://i.imgur.com/zn8WWIC.jpeg'/>
                <img src='https://i.imgur.com/Bg6pZDB.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://readymag.com/u901755307/4187871/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_13;