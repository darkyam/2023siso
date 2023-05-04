import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Ad_9(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    신수민
                </p>
            </div>
            <div className='work_name'>
                <p>
                OH CHA
                </p>
            </div>
            <div className='work_info'>
                <p>
                "매번 같은 차, 같은 향. 새로움이 필요하지 않으신가요?
시중에 판매하는 수많은 차 브랜드의 블렌딩 티. 그 중에서 나에게 꼭 맞는 비율과 조합의 차를 찾는 건 하늘의 별 따기와 같습니다. OH CHA는 내가 원하는 만큼, 원하는 비율로 차를 블렌딩 해 마실 수 있다면 어떨까 하는 질문에서 시작되었습니다. 
OH CHA는 당신만의 오리지널 블렌딩 티를 제공하는 브랜드입니다. OH CHA와 함께 당신만을 위한 향기로운 세상을 만나보세요. "
                </p>
            </div>
            <div className='insta_id'>
                <p>@ssu._.work</p>
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src='https://i.imgur.com/KhcrqX6.jpg'/>
                <img src='https://i.imgur.com/5BQCFKE.jpg'/>
                <img src='https://i.imgur.com/DU7KJP4.jpg'/>
            </div>
        </div>
    )
}

export default Ad_9;