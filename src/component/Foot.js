import VCD_logo from '../img/sidi_blue.png';

import INSTA from '../img/instagram.png'
import './css/foot_style.css'

const Foot=()=>{
    return (
        <div>
        <footer>
            <div className='logo'>
                <ul>
                    <a href='https://www.instagram.com/hivcdsiso/'><img src={INSTA} alt='INSTAGRAM'/></a>
                    <a href='https://sidi.hongik.ac.kr/'><img src={VCD_logo} alt='HIVCD'/></a>
                    
                </ul>
                <div className='underline'>
                    <hr/>
                </div>
            </div>
        </footer>   
        </div>
    )
    
}

export default Foot;