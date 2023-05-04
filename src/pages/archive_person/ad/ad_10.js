import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Ad_10(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    엄소연
                </p>
            </div>
            <div className='work_name'>
                <p>
                    닌텐도와 세 명의 작가
                </p>
            </div>
            <div className='work_info'>
                <p>
                "닌텐도가 통합이라는 주제로 공모전을 개최한 가상의 상황을 설정했다. 주제는 통합이고, 분야 제한은 없다. 작가의 이름도 가상이다. 
통합을 주제로 한 닌텐도의 가상 공모전 수상작 전시에 여러분을 초대합니다!"
                </p>
            </div>
            <div className='insta_id'>
                <p>@soynidl</p>
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src='https://i.imgur.com/QQvoxoh.jpg'/>
                <img src='https://i.imgur.com/Y6MWrHe.jpg'/>
                <img src='https://i.imgur.com/PPNR5r0.jpg'/>
                <img src='https://i.imgur.com/dGLBlke.jpg'/>
                <img src='https://i.imgur.com/6lNQ6pv.jpg'/>
                <img src='https://i.imgur.com/GpgxnWF.jpg'/>
                <img src='https://i.imgur.com/NtxX5no.jpg'/>
                <img src='https://i.imgur.com/2AryYHg.jpg'/>
                <img src='https://i.imgur.com/X2ZvTOy.jpg'/>
                <img src='https://i.imgur.com/t6k4utZ.jpg'/>
                <img src='https://i.imgur.com/QQIq9Qg.jpg'/>
            </div>
            <div className='web_link'>
                <a href='hhttps://youtu.be/_iye0jTp8J8'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Ad_10;