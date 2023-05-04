import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Ad_5(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    김현빈
                </p>
            </div>
            <div className='work_name'>
                <p>
                    Pretzel Perfect Family
                </p>
            </div>
            <div className='work_info'>
                <p>
                "이모가 조카에게 전해주는 따뜻하고 다정한 목소리로, 앤티앤스 프레즐의 이야기를 인스타툰으로 소개한다. 오늘도 조카들에게 
완벽한 프레즐을 나누어 줄 수 있기를!"
                </p>
            </div>
            <div className='insta_id'>
                <p>@_0hb2</p>
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src='https://i.imgur.com/3U7wgbY.jpg'/>
                <img src='https://i.imgur.com/fUeLNoK.jpg'/>
                <img src='https://i.imgur.com/TUNemXR.jpg'/>
                <img src='https://i.imgur.com/5X8oQhr.jpg'/>
            </div>
            <div className='web_link'>
                <a href='https://kimhyeonbean.github.io/auntieannes/'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Ad_5;