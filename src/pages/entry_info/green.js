import { Button } from "react-bootstrap";
import Title from "../../component/Title";
import logo from "../../img/entry/logo/logo_greenbee.png"
import title from "../../img/entry/title/greenb.png"
import './css/entry_style.css'

function Greenb() {
    return(
        <div className="entry_all">
        <Title name="Greenb"/>
        <div className="entry_logo">
            <img src={logo}/>
        </div>
        <div className="entry_name">
            <img src={title}/>
        </div>
        <div className="entry_info">
            <p>
            그린비는 1995년에 창설된 그래픽&아트디렉팅 소모임이다. 평면과 입체, 영상 등 다양한 분야를 넘나들며 새로운 관점으로 실험하고 도전하는 작업을 지속하고 있다.
            </p>
        </div>
        <div>
            <Button variant="outline" className="archive_button">Archive</Button>
        </div>
        </div>
    )
}

export default Greenb;