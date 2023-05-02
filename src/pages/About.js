import './css/about_style.css'
import Poster from '../img/mobile_main3.png'
import Title from '../component/Title'

const About = () => {
    return (
        <>
        <Title name="About"/>
        <div className='about'>
            <div className='about_poster'>
                <img src={Poster} alt='siso'/>
            </div>
            <div className='about_title'>
                <p>홍익대학교 시각디자인과 소모임 축제주간</p>
                <p>제 4회 SISO: !(factorial)</p>
            </div>
            <div className='about_date'>
                <p>2023. 3.21-3.25</p>
                <p>홍익대학교 서울캠퍼스</p>
                <p>R동 1층 다목적실 & S동 3층 신축강당</p>
            </div>
            <hr/>
            <div className='about_info_title'>
                <p>! (factorial)</p>
            </div>
            <div className='about_info'>
                <p>n!=1x2x3x... ...x(n-1)xn</p>
                <p>
                    n에 대입되는 수가 커질수록 그 결과값이 무한히 증식하는 팩토리얼처럼,
                    각 소모임이 한 자리에 모이고 n의 값이 커지면서 우리가 가진 가능성은 무한히 확장된다.
                    그 가능성의 결과는 문장부호 '!'와 같은 강렬한 감정과 놀라움으로 다가온다.
                </p>
            </div>


        </div>
        </>
    )

}
export default About;