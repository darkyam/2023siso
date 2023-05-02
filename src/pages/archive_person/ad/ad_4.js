import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

// function 폴더이름_시트순번
// export default 폴더이름_시트순번
// 이해했으면 주석은 지워주세요.
// 공란인 div는 다 지워주세요.
function ad_4(){
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
            <div className='insta_id'>
                {/* 
                링크가 있으면 <a href='인스타 링크'>인스타id<a/>
                링크가 없으면 <p>인스타 id</p>
                */}
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src=''/>
            </div>
            <div className='web_link'>
                <a href='https://youtu.be/v-3ffDw2IJw'>
                    <img src={home_icon}/>Webpage
                </a>
            </div>
        </div>
    )
}

export default ad_4;