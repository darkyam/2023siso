import { Button } from "react-bootstrap";
import Title from "../../component/Title";
import logo from "../../img/entry/logo/logo_hips.png"
import title from "../../img/entry/title/hips.png"
import './css/entry_style.css'
import { Link } from "react-router-dom";

function Hips() {
    return(
        <div className="entry_all">
        <Title name="HIPS"/>
        <div className="entry_logo">
            <img src={logo}/>
        </div>
        <div className="entry_name">
            <img src={title}/>
        </div>
        <div className="entry_info">
            <p>
            HIPS는 Hongik Photography Study의 약자로, 1994년에 창립된 홍익대학교 시각디자인과 내 사진예술 소모임이다. 상을 맺어 만든 이미지를 기반으로 매체에 제한없이 시각 언어로써 순수 예술과 디자인을 매개하고, 독자적이고 주체적인 작업관을 형성해 시각물을 창작한다. HIPS는 개개인의 표현과 다양성을 존중하며, 동시대 예술과 더불어 실험과 상호작용을 지속하고 모든 구성원은 자신의 작업을 논리적이고 감정적으로 이해하며,끊임없이 설명하고 표현하는 태도를 지향한다.
            </p>
        </div>
        <div>
            <Link to={'/archieve/HIPS'}>
            <Button variant="outline" className="archive_button">Archive</Button>
            </Link>
        </div>
        </div>
    )
}

export default Hips;