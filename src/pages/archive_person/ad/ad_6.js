import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Ad_6(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    박소민
                </p>
            </div>
            <div className='work_name'>
                <p>
                    24hours, 365days COUTURE
                </p>
            </div>
            <div className='work_info'>
                <p>
                "평범한 삶 속에 스며들어 활기와 개성을 더해주는 패션 브랜드 '쥬시 꾸뛰르'의 봄 팝업스토어 오픈! 달력, 뉴스, 유튜브 컨텐츠 
등 일상적 요소들과 쥬시 꾸뛰르의 콜라보레이션을 구경해 보자"
                </p>
            </div>
            <div className='insta_id'>
                <p>@sparkqkrth</p>
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src='https://i.imgur.com/ElOxgtL.jpg'/>
                <img src='https://i.imgur.com/ZDQJImC.jpg'/>
                <img src='https://i.imgur.com/zHLbxPz.jpg'/>
                <img src='https://i.imgur.com/YWo4DMI.jpg'/>
                <img src='https://i.imgur.com/CXNhvmM.jpg'/>
                <img src='https://i.imgur.com/I6uhZAQ.jpg'/>
            </div>
            <div className='web_link'>
                <a href='https://youtu.be/SJ55gbLFHU8'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Ad_6;