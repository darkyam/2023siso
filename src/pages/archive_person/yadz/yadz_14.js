import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Yadz_14(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    신혜영
                </p>
            </div>
            <div className='work_name'>
                <p>
                    unknown x
                </p>
            </div>
            <div className='work_info'>
                <p>
                "“세상은 미지수로 가득 차 있고, 우리는 그 안에서 답을 찾아 헤맨다.”<br/>
마음 가는 대로 선택하세요. 선택을 거듭할수록 서서히 드러나는 X. 당신이 지닌 X의 모습은 과연…?"
                </p>
            </div>
            <div className='insta_id'>
                <a href='https://www.instagram.com/shine.y0/?igshid=ZDdkNTZiNTM%3D'>
                @shine.y0
                </a>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/BE1cTBQ.png'/>
                <img src='https://i.imgur.com/tQn0bph.png'/>
                <img src='https://i.imgur.com/nGSnTRm.png'/>
                <img src='https://i.imgur.com/wpW21L2.png'/>
                <img src='https://i.imgur.com/S2EtJSo.png'/>
                <img src='https://i.imgur.com/pYBX9x9.png'/>
                <img src='https://i.imgur.com/HQfK2ug.png'/>
                <img src='https://i.imgur.com/XRqZwRn.png'/>
                <img src='https://i.imgur.com/Pb0uW4w.png'/>
            </div>
            <div className='web_link'>
                <a href='https://siso-unknownx.netlify.app'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Yadz_14;