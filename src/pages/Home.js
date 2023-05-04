import Foot_home from '../component/foot_home';
import Poster from '../img/mobile_main3.png';
import './css/home_style.css'

function Home(){
    return (
        <div>
    <div className='home_poster'>
        <img src={Poster}/>
    </div>
    <Foot_home/>
    </div>
    );
}

export default Home;