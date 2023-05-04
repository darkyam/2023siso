import '../css/archive_info_style.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Hyp () {
    return (
        <div className='archive_all'>
        <div className='archive_name'>
            <p>
                HYPHEN
            </p>
        </div>
        <div className='archive_poster'>
            <img src='https://i.imgur.com/AVF3pfe.jpeg'/>
        </div>
        <div className='archive_title'>
            <p>
            하이퍼텍스트 hyper·text
            </p>
        </div>
        <div className='archive_info'>
            <p>
            하이퍼텍스트는 링크 또는 노드를 통해 웹 상의 다른 문서나 사이트로 이동할 수 있는 텍스트이다. 
전통적인 선형 텍스트와 달리 텍스트의 개방성과 확장성 그리고 다선형성을 그 특징으로 한다.
하이픈의 메세지를 하나의 텍스트로 담아내어 대중과 연결한다.  
            </p>       
        </div>
        <hr/>
        <div className='archive_link'>
        <Link to={'/archieve/HYPHEN/6'}>
        <img src='https://i.imgur.com/lOWoMvQ.jpeg'/>
        </Link>
        <Link to={'/archieve/HYPHEN/10'}>
        <img src='https://i.imgur.com/NcoSaPt.jpeg'/>
        </Link>
        <Link to={'/archieve/HYPHEN/11'}>
        <img src='https://i.imgur.com/OzXhg54.jpeg'/>
        </Link>
        <Link to={'/archieve/HYPHEN/12'}>
        <img src='https://i.imgur.com/NBc8jsq.jpeg'/>
        </Link>
        <Link to={'/archieve/HYPHEN/14'}>
        <img src='https://i.imgur.com/TmGACMA.jpeg'/>
        </Link>
        <Link to={'/archieve/HYPHEN/18'}>
        <img src='https://i.imgur.com/4uxCJFw.jpeg'/>
        </Link>
        <Link to={'/archieve/HYPHEN/21'}>
        <img src='https://i.imgur.com/vyJfAvc.jpeg'/>
        </Link>
        <Link to={'/archieve/HYPHEN/24'}>
        <img src='https://i.imgur.com/hbeA83K.jpeg'/>
        </Link>
        <Link to={'/archieve/HYPHEN/28'}>
        <img src='https://i.imgur.com/efrcQFy.jpeg'/>

        </Link>
        </div>
    </div>
    )
    

}
export default Hyp;