import { Button } from "react-bootstrap";
import Title from "../../component/Title";
import logo from "../../img/entry/logo/logo_i.png"
import title from "../../img/entry/title/iray.png"
import './css/entry_style.css'

function Iray() {
    return(
        <div className="entry_all">
        <Title name="I-Ray"/>
        <div className="entry_logo">
            <img src={logo}/>
        </div>
        <div className="entry_name">
            <img src={title}/>
        </div>
        <div className="entry_info">
            <p>
            아이레이는 2015년에 창설된 홍익대학교 시각디자인과 3D그래픽 소모임이다. 캐릭터모델링, 애니메이션, 모션그래픽, 언리얼, vr, ar 등의 3D작업을 진행하고 있다. 아이레이는 상상한 것을 현실로 만들어 내는 다양한 프로그램들을 공부하며 여러 분야에 확장해가는 미래지향적 소모임인 만큼, 향후 펼쳐질 미래산업과 3D기술간의 융합에 대해 큰 관심이 있다.
            </p>
        </div>
        <div>
            <Button variant="outline" className="archive_button">Archive</Button>
        </div>
        </div>
    )
}

export default Iray;