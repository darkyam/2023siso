import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Yadz_19(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    전재곤
                </p>
            </div>
            <div className='work_name'>
                <p>
                    빙하
                </p>
            </div>
            <div className='work_info'>
                <p>
                보기 나름이지 않을까요?
                </p>
            </div>
            <div className='insta_id'>
                <a href='https://www.instagram.com/kamesu_shi/'>@kamesu_shi</a>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/W8BaxOi.jpeg'/>
                <img src='https://i.imgur.com/cJVVwnW.jpeg'/>
            </div>
        </div>
    )
}

export default Yadz_19;