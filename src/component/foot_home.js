import SISO_FOOTER from '../img/siso_blue_logo.png';
import './css/foot_style.css'

function Foot_home(){
    return(
        <div className='info'>
            <div className='siso_foot'>
                <img src={SISO_FOOTER} alt='SISO'/>
            </div>
                <div className='date'>
                2023/03/21~25
                </div>
            <address>
            홍익대학교 시각디자인과 소모임 축제주간<br/>
            제 4회 SISO: !(Factorial)
            </address>
            </div>
    )
}

export default Foot_home;