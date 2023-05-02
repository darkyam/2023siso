import VCD_logo from '../img/sidi_blue.png';


const Foot_loading=()=>{
    return (
        <footer className='footer_load'>
            <div className='info'>
                <div className='date'>
                2023/03/21~25
                </div>
            <address>
            홍익대학교 시각디자인과 소모임 축제주간<br/>
            제 4회 SISO:!(Factorial)
            </address>
            </div>
            <div className='logo'>
                <ul>
                    <li>
                    <img src={VCD_logo}/>
                    </li>
                </ul>
            </div>
        </footer>
    )
    
}

export default Foot_loading;