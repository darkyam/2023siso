import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'
import { Link } from 'react-router-dom';
import React from 'react';

function Iray_16(){
    return (
        <div className='person_all'>
            <div className='youtube_link'>
            <iframe src="https://www.youtube.com/embed/JXW8klC7kgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
            </div>
            <div className='work_name'>
                <p>2022 서브 프로젝트</p>
            </div>
            <div className='team_name'>
            <p>구한나 Little nightmare</p>
            <p>김민하 Sweet Fortune Cookie</p>
            <p>박서연 UFO Cookie</p>
            <p>박채영 Aquarium Cookie</p>
            <p>손서영 Fall Chipmunk Cookie</p>
            <p>안은빈 Cookie in my garden</p>
            <p>양예지 Witch's Sweet Cookies</p>
            <p>조예봄 My memory cookie</p>
            <p>조예원 Hurt</p>
            <p>조유선 Marine nutrition</p>
            </div>
            
            <div className='work_info'>
                <p>2022년도 서브프로젝트의 주제는 "내가 만든 쿠키"로 각자의 상상력으로 자유롭게 자신만의 창의적인 쿠키를 만드는 프로젝트입니다.
                </p>
            </div>
        </div>
    )
}

export default Iray_16;