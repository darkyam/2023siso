import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Ad_16(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    조예나
                </p>
            </div>
            <div className='work_name'>
                <p>
                    Light up your life, Davich
                </p>
            </div>
            <div className='work_info'>
                <p>
                온 세상이 어둡고 컴컴하게만 느껴질때, 다비치 안경이 당신의 세상을 밝혀줄거에요! 우리 함께 밝은 세상에 눈을 떠 보아요.
                </p>
            </div>
            <div className='insta_id'>
                <p>@aneyohc</p>
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src='https://i.imgur.com/oiYq0CG.png'/>
                <img src='https://i.imgur.com/Xv8o9j9.jpeg'/>
                <img src='https://i.imgur.com/C2iuNhE.jpeg'/>
                <img src='https://i.imgur.com/BP3afVZ.jpeg'/>
                <img src='https://i.imgur.com/TpUkvzQ.jpeg'/>
            </div>
        </div>
    )
}

export default Ad_16;