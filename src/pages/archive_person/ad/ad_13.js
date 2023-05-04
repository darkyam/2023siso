import '../../css/archive_person.css'
import home_icon from '../../../img/homepage_blue.png'

// function 폴더이름_시트순번
// export default 폴더이름_시트순번
// 이해했으면 주석은 지워주세요.
// 공란인 div는 다 지워주세요.
function Ad_13(){
    return (
        <div className='person_all'>
            <div className='team_name'>
                <p>
                    이수빈
                </p>
            </div>
            <div className='work_name'>
                <p>
                    프루센트, 칵테일 한잔.
                </p>
            </div>
            <div className='work_info'>
                <p>
                "프루센트는 과일 fruit 향 scent 를 결합한 단어로 과일과 알코올이 ‘입안에서 만나는 순간’을 시각화한 가상의 칵테일 브랜드이다. 
칵테일은 단지 맛이 섞인 혼합주가 아니라 달콤함과 쓴맛이라는 두 가지 반대되는 형용사를 통해 완전히 새로운 분위기를 
만들어내는 예술이다."
                </p>
            </div>
            <div className='insta_id'>
                <p>@suubinlee</p>
            </div>
            <div className='work_img'>
                {/* imgur 사이트에서 사진 우클릭-이미지 링크 복사 src 뒤 ''사이에 복붙 */}
                <img src='https://i.imgur.com/1cf00zJ.jpg'/>
                <img src='https://i.imgur.com/kJSZRND.jpg'/>
                <img src='https://i.imgur.com/gzXSwiM.jpg'/>
                <img src='https://i.imgur.com/T2RPFc3.jpg'/>
                <img src='https://i.imgur.com/nv7frHM.jpg'/>
                <img src='https://i.imgur.com/hX1SuHN.jpg'/>
                <img src='https://i.imgur.com/1hREU8S.jpg'/>
                <img src='https://i.imgur.com/pRHBfAt.jpg'/>
                <img src='https://i.imgur.com/BnuSedh.jpg'/>
                <img src='https://i.imgur.com/Y6oxmUH.jpg'/>
            </div>
        </div>
    )
}

export default Ad_13;