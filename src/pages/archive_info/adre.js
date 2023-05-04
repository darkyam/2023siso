import '../css/archive_info_style.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Adr() {
    return (
        <div className='archive_all'>
        <div className='archive_name'>
            <p>
                ADRENALIN
            </p>
        </div>
        <div className='archive_poster'>
            <img src='https://i.imgur.com/XnJjj8a.jpeg'/>
        </div>
        <div className='archive_title'>
            <p>
            퀀텀 리프(Quantum Leap)
            </p>
        </div>
        <div className='archive_info'>
            <p>
            '양자도약(Quantum Leap)'이란 에너지를 흡수하여 변화할 때 급속도로 변하는 것을 의미한다. 
마침내 사회가 제자리를 찾아간 22년을 지나 23년은 그간 축적해온 에너지를 통해 변화와 발전에 박차를 가할 시기이다. 
이에 애드레날린은 격변의 징조를 각자의 광고로 다루어본다. 
            </p>       
        </div>
        <hr/>
        <div className='archive_link'>
        <Link to={'/archieve/ADRENALIN/4'}>
                <img src='https://i.imgur.com/m9erNcb.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/5'}>
                <img src='https://i.imgur.com/d0p13v1.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/6'}>
                <img src='https://i.imgur.com/v56tdKl.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/7'}>
                <img src='https://i.imgur.com/vmL4Aqm.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/9'}>
                <img src='https://i.imgur.com/OjVSiS5.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/10'}>
                <img src='https://i.imgur.com/DUV1O2C.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/12'}>
                <img src='https://i.imgur.com/2xHUg8V.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/13'}>
                <img src='https://i.imgur.com/NLlAEVO.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/14'}>
                <img src='https://i.imgur.com/b4rN0x6.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/15'}>
                <img src='https://i.imgur.com/bdIsFfT.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/16'}>
                <img src='https://i.imgur.com/EOBRbHX.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/17'}>
                <img src='https://i.imgur.com/4Z8xPwo.jpeg'/>
            </Link>
            <Link to={'/archieve/ADRENALIN/18'}>
                <img src='https://i.imgur.com/3P0rTwB.jpeg'/>
            </Link>
        </div>
    </div>
    )
    

}
export default Adr;