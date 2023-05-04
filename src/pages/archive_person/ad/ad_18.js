import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Ad_18(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    최유진
                </p>
            </div>
            <div className='work_name'>
                <p>
                    우리가족, 아이! 깨끗해!
                </p>
            </div>
            <div className='work_info'>
                <p>
                "귀여운 사자가족과 함께 라이온 코리아의 아이! 깨끗해를 소개합니다! 온 가족이 
함께하는 아이! 깨끗해, ""친구야! 너도 우리와 함께 거품놀이 하자!"""
                </p>
            </div>
            <div className='insta_id'>
                <p>@coeyujin521</p>
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src='https://i.imgur.com/Femg5Sd.jpeg'/>
                <img src='https://i.imgur.com/XfRo5Pb.jpeg'/>
                <img src='https://i.imgur.com/4PyuA9y.jpeg'/>
                <img src='https://i.imgur.com/zhtLV0l.jpeg'/>
            </div>
        </div>
    )
}

export default Ad_18;