import { Button } from "react-bootstrap";
import Title from "../../component/Title";
import logo from "../../img/entry/logo/logo_hangul.png"
import title from "../../img/entry/title/hangul.png"
import './css/entry_style.css'

function Hangul() {
    return(
        <div className="entry_all">
        <Title name="Hangulggol"/>
        <div className="entry_logo">
            <img src={logo}/>
        </div>
        <div className="entry_name">
            <img src={title}/>
        </div>
        <div className="entry_info">
            <p>
            한글꼴연구회는 1992년에 설립되어 올해로 31주년을 맞이한 홍익대학교 시각디자인전공 학술 소모임이다. 우리는 한글 타이포그라피를 목적이자 도구로 다양한 실험과 연구를 해오고 있다. 우리는 한글을 사랑하며, 한글꼴을 연구하고 디자인하며, 크게는 한글을 발전시킨다. 또한, 우리는 글자의 형이 고정되지 않아 적응하며 진화할 수 있음을 알고, 변화하는 환경과 공존하는 글자를 끊임없이 제안한다.
            </p>
        </div>
        <div>
            <Button variant="outline" className="archive_button">Archive</Button>
        </div>
        </div>
    )
}

export default Hangul;