import { Button } from "react-bootstrap";
import Title from "../../component/Title";
import logo from "../../img/entry/logo/logo_yadz.png"
import title from "../../img/entry/title/yadz.png"
import './css/entry_style.css'

function Yadz() {
    return(
        <div className="entry_all">
        <Title name="Yadz"/>
        <div className="entry_logo">
            <img src={logo}/>
        </div>
        <div className="entry_name">
            <img src={title}/>
        </div>
        <div className="entry_info">
            <p>
            야즈는 Young Artist’s Drawing Zone의 약자로, 1998년 창설된 홍익대학교 시각디자인과 일러스트레이션 소모임이다. 회화, 컨셉아트, CG아트, 동화, 애니메이션, 만화 등 그림을 그리는 행위에서 비롯된 여러 분야를 총체적으로 다루고, 다양한 문법과 표현 실험을 통해 개인의 작업을 발전시키고 더 넓은 시각을 갖도록 하는 것을 목표하고 있다. 정기 프로젝트로는 출간물 프로젝트 '월간 얒잡'과 SISO전, 777전, 카페전, 그외에도 다양한 외부 전시활동이 있다.
            </p>
        </div>
        <div>
            <Button variant="outline" className="archive_button">Archive</Button>
        </div>
        </div>
    )
}

export default Yadz;