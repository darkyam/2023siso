import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import React from 'react';

function Proto_21(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                하유진
                </p>
            </div>
            <div className='work_name'>
                <p>
                ALIE_NATION
                </p>
            </div>
            <div className='work_info'>
                <p>
                A broken immigration system means broken families, and broken lives
                </p>
            </div>
            <div className='insta_id'>
                <p>@im_ha.pomelo</p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/OKiPR6g.jpeg'/>
                <img src='https://i.imgur.com/w7x7Tua.jpeg'/>
                <img src='https://i.imgur.com/mZuvT6J.jpeg'/>
                <img src='https://i.imgur.com/WOX4T2W.jpeg'/>
                <img src='https://i.imgur.com/xsGihgJ.jpeg'/>
                <img src='https://i.imgur.com/ci7Lnjx.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://luzph0822.wixsite.com/my-site'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Proto_21;