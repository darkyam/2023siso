import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

function Greenb_3(){
    return (
        <div className='person_all'>
     
            <div className='team_name'>
                <p>강수영
                </p>
            </div>
            <div className='work_name'>
                <p>Restaurant Papilon 
                </p>
            </div>
            <div className='work_info'>
                <p>수많은 불문율은 우리에게 인생의 정도(正道)로 여겨진다. 그러나 살다보면 많은 정답 속에서 갇혀 스스로를 오답으로 치부할 수 밖에 없는 상황을 마주하게된다. 삶 속에 정답과 오답이 있는가? 레스토랑 빠삐용에서는 정답 속에 갇힌 사람들은 위한 피자를 만들어 이에 대한 해답을 제시한다. 
                </p>
            </div><div className='insta_id'>
                <p>@swimmood</p>
            </div>
            <div className='work_img'>
            <img src='https://i.imgur.com/PydeJYH.jpeg'/>
            <img src='https://i.imgur.com/sWnb5K1.jpeg'/>
            <img src='https://i.imgur.com/vxkALor.jpeg'/>
            <img src='https://i.imgur.com/098RlTw.jpeg'/>
            </div>
            <div className='web_link'>
                <a href=''>https://may20000.wixsite.com/papilon
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default Greenb_3;