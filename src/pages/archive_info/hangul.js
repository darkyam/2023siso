import '../css/archive_info_style.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Hang() {
    return (
        <div className='archive_all'>
        <div className='archive_name'>
            <p>
                HANGULGGOL
            </p>
        </div>
        <div className='archive_poster'>
            <img src='https://i.imgur.com/4RRPmUs.jpeg'/>
        </div>
        <div className='archive_title'>
            <p>
                맞닿은 극과극
            </p>
        </div>
        <div className='archive_info'>
            <p>
            모든 글자는 획의 ‘흑’과 바탕의 ‘백’ 사이 경계에서 탄생한다. 
이곳의 글자 역시 흑백의 치열하고 극적인 균형으로부터 왔다. 
맞닿은 극과 극에서 대비되는 글자는 더욱 빛난다.
아무도 보지 못하는, 경계의 반짝임을 꿰뚫어보는 이들. 우리는 한글꼴연구회다.   
            </p>       
        </div>
        <hr/>
        <div className='archive_link'>
        <Link to={'/archieve/HANGULGGOL/11'}>
                <img src='https://i.imgur.com/XiDYLhh.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/12'}>
                <img src='https://i.imgur.com/mgUGPry.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/13'}>
                <img src='https://i.imgur.com/OflO6VD.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/14'}>
                <img src='https://i.imgur.com/0kZ1XLL.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/15'}>
                <img src='https://i.imgur.com/NNuEp33.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/16'}>
                <img src='https://i.imgur.com/2Sbncnt.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/17'}>
                <img src='https://i.imgur.com/pufVo4u.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/18'}>
                <img src='https://i.imgur.com/mYFKJt5.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/19'}>
                <img src='https://i.imgur.com/GX2tB1R.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/20'}>
                <img src='https://i.imgur.com/hbfPKdB.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/21'}>
                <img src='https://i.imgur.com/WhAorfD.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/22'}>
                <img src='https://i.imgur.com/o7onC6j.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/23'}>
                <img src='https://i.imgur.com/t7PnCYG.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/24'}>
                <img src='https://i.imgur.com/vi0AQvv.jpeg'/>
            </Link>
            <Link to={'/archieve/HANGULGGOL/25'}>
                <img src='https://i.imgur.com/PieSnky.jpeg'/>
            </Link>

        </div>
    </div>
    )
    

}
export default Hang;