import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Ad_4(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    김지우
                </p>
            </div>
            <div className='work_name'>
                <p>
                    Niket List
                </p>
            </div>
            <div className='work_info'>
                <p>
                당신을 나아가게 하는 것은 언제나 그냥 한 발자국입니다. 나이키와 함께 인생의 버킷 리스트 위를 질주해 보세요!
                </p>
            </div>
            <div className='work_img'>
                <img src='https://i.imgur.com/54B2a1a.jpg'/>
                <img src='https://i.imgur.com/U8Anzrc.jpg'/>
                <img src='https://i.imgur.com/ABPlM7L.jpg'/>
                <img src='https://i.imgur.com/wjHoU8H.jpg'/>
                <img src='https://i.imgur.com/wO84JVV.jpg'/>
                <img src='https://i.imgur.com/ntbXBJh.jpg'/>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
            </div>
            <div className='web_link'>
                <a href='https://youtu.be/v-3ffDw2IJw'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Ad_4;