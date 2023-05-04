import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';
// team name - 작가 이름
// work name - 작품 이름
// work info 설명
//inst_id insta
// work img 사진
// function Hips_시트상 순번
// 맨 아래에 export default Hips_시트상 순번;
function Hips_3(){
    return (
        <div className='person_all'>
            <div className='team_name'> 
                <p>
                김동혜
                </p>
            </div>
            <div className='work_name'>
                <p>이미지 그 후
                </p>
            </div>
            <div className='work_info'>
                <p>군더더기 없는 결과물은 후순위였다. <br/>
문득 떠나고, 대상에 오랜 시선을 두며 생각하고, 실체화하고, 그리고 종종 꺼내어보는, 일련의 행위가 훨씬 가치있다고 느낀다. 그러한 맥락에서 나에게 이미지는 수단이다.  그렇지만 수단의 역할을 마친 이미지들은 곧 무력해졌다. 이를 다시 목적으로 전환하고자 한다면, 위의 과정을 이미지를 만든 후에도 거쳐야 하지 않을까.
                </p>
            </div>
            <div className='insta_id'>
                <p>
                @yzet0
                </p>
            </div>
            <div className='work_img'>
            <img src='https://i.imgur.com/gygiqc3.jpg'/>
            <img src='https://i.imgur.com/H1AiZz9.jpg'/>
            <img src='https://i.imgur.com/AI7fvW6.jpg'/>
            <img src='https://i.imgur.com/O9teKGg.jpg'/>
            </div>
        </div>
    )
}

export default Hips_3;