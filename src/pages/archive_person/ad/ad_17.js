import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Ad_17(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    최예린 
                </p>
            </div>
            <div className='work_name'>
                <p>
                    Blissful Haribo
                </p>
            </div>
            <div className='work_info'>
                <p>
                "당신의 오감이 더없이 행복해질 수 있도록 하리보의 세상으로 당신을 초대합니다! 행복을 느끼기 위해서는 대상에 대한 정보를 수집하고,
이것이 나에게 좋은 감정을 줄지 나쁜 감정을 줄지 판단하는 절차를 거칩니다. 가장 첫 단계인 정보 수집은 오감을 이용하여 진행됩니다. 
행복을 중시하는 하리보가 사람들에게 행복을 주려면 오감이 행복한 하리보가 되어야 합니다. 시각, 청각, 후각, 미각, 촉각 다섯 가지 
감각이 각자 다른 행복을 느낄 수 있는 하리보를 만나 보세요!"
                </p>
            </div>
            <div className='insta_id'>
                <p>@yeriels2</p>
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src='https://i.imgur.com/1JRyKBC.jpeg'/>
                <img src='https://i.imgur.com/RGVFVUa.jpeg'/>
                <img src='https://i.imgur.com/AQDcnPX.jpeg'/>
                <img src='https://i.imgur.com/0qsE8xq.jpeg'/>
                <img src='https://i.imgur.com/t97iQiV.jpeg'/>
                <img src='https://i.imgur.com/Py1uC3X.jpeg'/>
                <img src='https://i.imgur.com/9w3aXqB.jpeg'/>
                <img src='https://i.imgur.com/nyYkcFq.jpeg'/>
                <img src='https://i.imgur.com/v39AFVk.jpeg'/>
                <img src='https://i.imgur.com/xMLbgJ1.jpeg'/>
            </div>
            <div className='web_link'>
                <a href='https://hivcdadrenalin.wixsite.com/blissful-haribo'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Ad_17;