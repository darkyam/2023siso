import { Button } from "react-bootstrap";
import Title from "../../component/Title";
import logo from "../../img/entry/logo/logo_hyph.png"
import title from "../../img/entry/title/hyphen.png"
import './css/entry_style.css'

function Hyphen() {
    return(
        <div className="entry_all">
        <Title name="Hyphen"/>
        <div className="entry_logo">
            <img src={logo}/>
        </div>
        <div className="entry_name">
            <img src={title}/>
        </div>
        <div className="entry_info">
            <p>
            하이픈은 UX/UI, 브랜드 디자인, 서비스 디자인 등의 시각환경디자인 분야를 다루는 소모임이다. 단어와 단어 사이에 긴밀하고도 다양한 관계를 맺을 수 있게 해주는 특수기호 ‘-’ (하이픈)처럼, 디자이너와 사용자간의 연결과 소통을 탐구하며 어떤 분야를 하더라도 사용자환경을 기반으로 한 디자인을 하고자 노력한다. 하이프너는 ‘새로운 세상을 잇다’라는 슬로건 아래 세상과 사용자를 다양하게 이어주는 역할을 수행하는 디자이너로서 전달하고자 하는 가치를 매력적이면서도 실용적인 제품이나 서비스로 풀어낸다.
            </p>
        </div>
        <div>
            <Button variant="outline" className="archive_button">Archive</Button>
        </div>
        </div>
    )
}

export default Hyphen;