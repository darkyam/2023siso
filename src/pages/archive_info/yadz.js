import '../css/archive_info_style.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Yad() {
    return (
        <div className='archive_all'>
        <div className='archive_name'>
            <p>
                YADZ
            </p>
        </div>
        <div className='archive_poster'>
            <img src='https://i.imgur.com/qvB8lZr.jpeg'/>
        </div>
        <div className='archive_title'>
            <p>
                가능세계, p
            </p>
        </div>
        <div className='archive_info'>
            <p>
            모든 경우의 수를 구하는 공식인 !(factorial). !가 나타낸 모든 경우는 그 수만큼의 가능세계로서 나타난다.
각 가능세계는 'p는 가능하다'라는 명제를 가진 채, 우리는 꿈꾸던 p가 구현된 무수한 가능세계를 자유로이 이동하며 새로운 우리를 만난다.    
            </p>       
        </div>
        <hr/>
        <div className='archive_link'>
            <Link to={'/archieve/YADZ/4'}>
                <img src='https://i.imgur.com/xDvtK0S.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/6'}>
                <img src='https://i.imgur.com/6IPFP40.png'/>
            </Link>
            <Link to={'/archieve/YADZ/8'}>
                <img src='https://i.imgur.com/hvlVzUS.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/9'}>
                <img src='https://i.imgur.com/HhtXxRK.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/10'}>
                <img src='https://i.imgur.com/m1hOXIe.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/11'}>
                <img src='https://i.imgur.com/PJPoHBd.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/13'}>
                <img src='https://i.imgur.com/CfBH9My.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/14'}>
                <img src='https://i.imgur.com/vPHl71R.png'/>
            </Link>
            <Link to={'/archieve/YADZ/15'}>
                <img src='https://i.imgur.com/R8SEXOA.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/16'}>
                <img src='https://i.imgur.com/dxB5TXv.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/18'}>
                <img src='https://i.imgur.com/JFz2LTB.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/19'}>
                <img src='https://i.imgur.com/EizEqBZ.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/20'}>
                <img src='https://i.imgur.com/5bldiBW.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/21'}>
                <img src='https://i.imgur.com/yC26wcw.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/22'}>
                <img src='https://i.imgur.com/q7LV8ES.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/23'}>
                <img src='https://i.imgur.com/dnOI9ry.jpeg'/>
            </Link>
            <Link to={'/archieve/YADZ/24'}>
                <img src='https://i.imgur.com/jWDLQVU.jpeg'/>
            </Link>
        </div>
    </div>
    )
    

}
export default Yad;