import '../css/archive_info_style.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Grb() {
    return (
        <div className='archive_all'>
        <div className='archive_name'>
            <p>
                GREENBEE
            </p>
        </div>
        <div className='archive_poster'>
            <img src='https://i.imgur.com/sEfIBLD.jpeg'/>
        </div>
        <div className='archive_title'>
            <p>
            Imaginary Number
            </p>
        </div>
        <div className='archive_info'>
            <p>
            허수(imaginary number)가 정의되기 전 모든 수는 좌표평면 위에서만 표현되었다. 
허수의 정의로 수의 체계는 더 넓은 차원으로 확장되었고, 우리는 새로운 세계를 발견하는 계기를 마련하였다. 
기존의 체계가 설명할 수 없었던 수를 나타내며 확장되는 세계는, 그래픽으로써 자신만의 차원을 만들어내는 그린비와 닮아있다.  
            </p>       
        </div>
        <hr/>
        <div className='archive_link'>
        <Link to={'/archieve/GREENBEE/3'}>
                <img src='https://i.imgur.com/FFlqvna.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/4'}>
                <img src='https://i.imgur.com/Qo15WU3.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/5'}>
                <img src='https://i.imgur.com/itWlIdF.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/6'}>
                <img src='https://i.imgur.com/TSNDuMG.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/7'}>
                <img src='https://i.imgur.com/Yh3s39x.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/8'}>
                <img src='https://i.imgur.com/zVQK2rD.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/9'}>
                <img src='https://i.imgur.com/eVESRZ5.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/10'}>
                <img src='https://i.imgur.com/UWQIzpG.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/11'}>
                <img src='https://i.imgur.com/qd85nUW.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/12'}>
                <img src='https://i.imgur.com/gzJgD3l.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/13'}>
                <img src='https://i.imgur.com/FEOCYeF.png'/>
            </Link>
            <Link to={'/archieve/GREENBEE/14'}>
                <img src='https://i.imgur.com/CfPNh3y.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/15'}>
                <img src='https://i.imgur.com/sbCsavq.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/16'}>
                <img src='https://i.imgur.com/PZFm5Si.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/17'}>
                <img src='https://i.imgur.com/f96hNzX.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/18'}>
                <img src='https://i.imgur.com/MV17xtI.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/20'}>
                <img src='https://i.imgur.com/6oyUUct.jpeg'/>
            </Link>
            <Link to={'/archieve/GREENBEE/23'}>
                <img src='https://i.imgur.com/MXrgIk2.jpeg'/>
            </Link>
        </div>
    </div>
    )
    

}
export default Grb;