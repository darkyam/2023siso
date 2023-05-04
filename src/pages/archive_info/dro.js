import '../css/archive_info_style.css'
import React from 'react';
import Poster from './dr_pos.jpeg';
import Lee from './dr_lee.jpeg';
import { Link } from 'react-router-dom';

function Dro() {
    return (
        <div className='archive_all'>
        <div className='archive_name'>
            <p>
                DROMAPIC
            </p>
        </div>
        <div className='archive_poster'>
            <img src={Poster}/>
        </div>
        <div className='archive_title'>
            <p>
            S#!
            </p>
        </div>
        <div className='archive_info'>
            <p>
            씬(Scene)이란 영상에서 동일 시간, 동일 장소에서 단일 상황, 액션, 대사나 사건이 나타나는 한 장면을 의미한다. 
씬은 숏의 집합으로 구성되고, 씬의 모음으로 시퀀스가 구성된다. 부원들은 각각의 씬을 만들어냄으로써 드로마픽이라는 하나의 거대한 시퀀스를 형성하며, 이 시퀀스는 &lt;!(factorial)&gt;에서 무한히 그 가능성을 확장하며 완성된다.  
            </p>       
        </div>
        <hr/>
        <div className='archive_link'>
        <Link to={'/archieve/DROMAPIC/3'}>
                <img src='https://i.imgur.com/nj4OusZ.jpeg'/>
            </Link>
            <Link to={'/archieve/DROMAPIC/4'}>
                <img src='https://i.imgur.com/ifvRKFg.jpeg'/>
            </Link>
            <Link to={'/archieve/DROMAPIC/6'}>
                <img src='https://i.imgur.com/kP60HNU.jpeg'/>
            </Link>
            <Link to={'/archieve/DROMAPIC/7'}>
                <img src='https://i.imgur.com/2SpJyBt.jpeg'/>
            </Link>
            <Link to={'/archieve/DROMAPIC/21'}>
                <img src={Lee}/>
            </Link>
        </div>
    </div>
    )
    

}
export default Dro;