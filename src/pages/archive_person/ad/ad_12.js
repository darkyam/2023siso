import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Ad_12(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    우유민
                </p>
            </div>
            <div className='work_name'>
                <p>
                    돌종이 가방 봉사 캠페인
                </p>
            </div>
            <div className='work_info'>
                <p>
                "전통시장의 비닐봉지를 없애는 방법, 종이봉투의 접착제를 없애는 방법은 무엇일까요? 
mipwig만의 돌종이 가방 봉사 캠페인에 참여해보세요!"
                </p>
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src='https://i.imgur.com/jlL3adj.jpg'/>
                <img src='https://i.imgur.com/QEH2cdl.jpg'/>
                <img src='https://i.imgur.com/ViYCBdY.jpg'/>
                <img src='https://i.imgur.com/3scccUD.jpg'/>
                <img src='https://i.imgur.com/5tsOIbz.jpg'/>
                <img src='https://i.imgur.com/gjk3Nij.jpg'/>
                <img src='https://i.imgur.com/jOjtnBu.jpg'/>
            </div>
        </div>
    )
}

export default Ad_12;