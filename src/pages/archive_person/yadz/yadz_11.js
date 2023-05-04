import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Yadz_11(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>송윤하
                </p>
            </div>
            <div className='work_name'>
                <p>변신
                </p>
            </div>
            <div className='work_info'>
                <p>"- 언제나 알록달록 말랑말랑하게 -<br/>

*이 작품은 국카스텐 밴드의 '변신'이라는 노래를 모티브로 만들어졌습니다. <br/>

저는 시간이 갈수록, 새로운 걸 시도하는 게 점점 더 어려워지고 있다고 느낍니다. 시간은 늘 촉박해 보이고, 정해진 기간 내에 정해진 단계만큼의 성장을 이뤄야 한다는 틀 속에서 불안해하고 있죠.

그러니 저는 '변신'이라는 놀이를 즐기는 아이의 마음으로 돌아가고 싶습니다. 두려움과 고정관념을 모르는 상태로 돌아가서 놀이에 집중할수록, 우리는 시간이라는 틀을 초월할 수 있을 것입니다.

아이의 마음으로, 새로운 허물을 입었다 벗었다가 하면서 어디로든지 발을 내딛다 보면
얇디얇은 허물들은 쌓여서 우리에게 새로운 색을 입혀줄 것이고,
다채롭고 말랑한 껍데기의 길이 만들어질 것입니다."
                </p>
            </div>
            <div className='insta_id'>
                <p>@yunha_painting</p>
            </div>
            <div className='work_img'>
            <img src='https://i.imgur.com/djFekea.jpeg'/>
            <img src='https://i.imgur.com/FnydMTZ.jpeg'/>
            <img src='https://i.imgur.com/O7lNNPG.jpeg'/>
            <img src='https://i.imgur.com/ACQFsUZ.jpeg'/>
            <img src='https://i.imgur.com/9waOuG2.jpeg'/>
            <img src='https://i.imgur.com/KwWgGvH.jpeg'/>
            <img src='https://i.imgur.com/frktT5U.jpeg'/>
            <img src='https://i.imgur.com/w3w0bHB.jpeg'/>
            <img src='https://i.imgur.com/A2npk5s.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://www.instagram.com/yunha_painting/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Yadz_11;