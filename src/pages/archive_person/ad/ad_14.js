import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Ad_14(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                임채은
                </p>
            </div>
            <div className='work_name'>
                <p>
                    Ensemble des Geschichte
                </p>
            </div>
            <div className='work_info'>
                <p>
                "어른의 세대가 새로 태어난 핏덩이를 위해 만든 역사와 문화의 총합체인 동요는 헤르더가 강조한 세대의 순환과 쌓임의 하모니를 잘 
보여준다. 따라서 몇 개국의 동요를 그 나라의 문화와 엮어 분석했으며, 민요수집운동의 정신을 받들어 동요를 배포한다."
                </p>
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src='https://i.imgur.com/rvp70sS.jpg'/>
                <img src='https://i.imgur.com/WCgBYmu.jpg'/>
                <img src='https://i.imgur.com/8AqowsQ.jpg'/>
                <img src='https://i.imgur.com/MKyf3j6.jpg'/>
                <img src='https://i.imgur.com/lELwRQ2.jpg'/>
                <img src='https://i.imgur.com/wenyWzc.jpg'/>
            </div>
        </div>
    )
}

export default Ad_14;