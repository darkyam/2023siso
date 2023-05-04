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
function Hips_12 (){
    return (
        <div className='person_all'>
            <div className='team_name'> 
                <p>
                한재원
                </p>
            </div>
            <div className='work_name'>
                <p>食
                </p>
            </div>
            <div className='work_info'>
                <p>국가의 경계는 사라지고 개인의 민족성과 정체성이, 나를 이루는 뿌리가 무엇보다 중요해진 
이 사회에서 나는 인간의 食을 포착한다. 외적인 차이도 언어도 불분명한 사회에서 
우리가 만들고 먹고, 즐기는 食은 우리들의 가릴 수도 가릴 필요도 없는 적나라한 정체성을 노출한다.
                </p>
            </div>
            <div className='insta_id'>
                <p>@ja1_xgxvjjxm</p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/2R4Aeza.jpg'/>
            </div>
        </div>
    )
}

export default Hips_12;