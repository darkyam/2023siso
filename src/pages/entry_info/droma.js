import { Button } from "react-bootstrap";
import Title from "../../component/Title";
import logo from "../../img/entry/logo/logo_droma.png"
import title from "../../img/entry/title/dro.png"
import './css/entry_style.css'

function Droma() {
    return(
        <div className="entry_all">
        <Title name="Dromapic"/>
        <div className="entry_logo">
            <img src={logo}/>
        </div>
        <div className="entry_name">
            <img src={title}/>
        </div>
        <div className="entry_info">
            <p>
            드로마픽은 1996년도 창설되어 올해로 22주년을 맞는 홍익대학교 시각디자인과의 영상 소모임이다. 영화, CF, 모션그래픽, 뮤직비디오, 실사 영상, 2D, 3D 애니메이션, VFX 등 영상으로 제작되는 모든 디자인적 매체를 다루며, 다양한 프로그램과 장비들을 배우고 각종 용어와 시나리오에 대한 훈련을 통해 영상 문법을 이용하여 개인의 이야기를 할 수 있는 능력을 가지게 되는 것을 목표로 하고 있다.    
            </p>
        </div>
        <div>
            <Button variant="outline" className="archive_button">Archive</Button>
        </div>
        </div>
    )
}

export default Droma;