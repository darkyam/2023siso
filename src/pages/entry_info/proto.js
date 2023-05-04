import { Button } from "react-bootstrap";
import Title from "../../component/Title";
import logo from "../../img/entry/logo/logo_proto.png"
import title from "../../img/entry/title/proto.png"
import './css/entry_style.css'
import { Link } from "react-router-dom";

function Proto() {
    return(
        <div className="entry_all">
        <Title name="PROTO"/>
        <div className="entry_logo">
            <img src={logo}/>
        </div>
        <div className="entry_name">
            <img src={title}/>
        </div>
        <div className="entry_info">
            <p>
            PROTO(프로토)는 2017년도에 개설된, 인터랙션 디자인을 공부하는 홍익대학교 시각디자인과 학술 소모임이다. 인간과 컴퓨터의 상호작용(Human-Computer Interaction), 일상적으로 접하는 수많은 디지털 매체들이 인간과의 상호작용하는 것을 다양한 디자인 장르와 접목시켜 개발(기술)과 디자인 모두에 대한 이해도를 높이는 것을 궁극적인 목표로 한다.
            </p>
        </div>
        <div>
            <Link to={'/archieve/PROTO'}>
            <Button variant="outline" className="archive_button">Archive</Button>
            </Link>
        </div>
        </div>
    )
}

export default Proto;