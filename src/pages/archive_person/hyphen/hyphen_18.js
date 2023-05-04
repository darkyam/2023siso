import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Hyphen_18(){
    return (
        <div className='person_all'>
        
            <div className='team_name'>
                <p>김새하 김지원 이세민
                </p>
            </div>
            <div className='work_name'>
                <p>WWr.d
                </p>
            </div>
            <div className='work_info'>
                <p>독서는 생각하는 능력을 길러주고, 더욱 풍요로운 삶을 살 수 있도록 도와줍니다. 그래서 많은 사람들이 재미, 자기개발 등 다양한 이유로 매년 독서 계획을 세우지만, 독서에 대한 의지는 오래 가지 못하는 경우가 많습니다. 왜 꾸준히 독서를 이어나가지 못할까요? 월디는 여행 컨셉의 책방으로, 독서를 좋아하는 사람들에게 즐거운 독서 경험과 지속적인 책 읽기 습관 형성을 도와줍니다. 월디는 기존의 책방과 도서관과는 다른 형태를 가지고 있으며, 자신이 편안함을 느낄 수 있는 공간에서 책을 읽고 생각을 기록할 수 있도록 최적의 환경을 제공합니다. 또한, 책과 공간을 통해 새로운 세상으로 여행하는 것과 같은 설렘을 경험할 수 있습니다. 저희 월디와 함께 즐겁고 편안한 독서 여행이 되시기 바랍니다. 곧 이륙합니다.
                </p>
            </div>
            
            <div className='work_img'>
            <img src='https://i.imgur.com/GcSJCeJ.jpg'/>
            <img src='https://i.imgur.com/fLqIULH.jpg'/>
            <img src='https://i.imgur.com/w2KPfuH.jpg'/>
            <img src='https://i.imgur.com/XxqQeNO.jpg'/>
            <img src='https://i.imgur.com/VfYbKzJ.jpg'/>
            <img src='https://i.imgur.com/QwuVjpH.jpg'/>
            </div>
            <div className='web_link'>
                <a href='https://www.behance.net/gallery/166436753/World-Wide-Reading-WWrd'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Hyphen_18;