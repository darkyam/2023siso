import VCD_logo from '../img/sidi_blue.png';
import SISO_FOOTER from '../img/siso_blue_logo.png';
import INSTA from '../img/instagram.png'
import './css/foot_style.css'

const Foot=()=>{
    return (
        <footer>
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
            <div className='logo'>
                <ul>
                    <a href='https://www.instagram.com/hivcdsiso/'><img src={INSTA} alt='INSTAGRAM'/></a>
                    <a href='https://sidi.hongik.ac.kr/'><img src={VCD_logo} alt='HIVCD'/></a>
                </ul>
            </div>
        </footer>
    )
    
}

export default Foot;