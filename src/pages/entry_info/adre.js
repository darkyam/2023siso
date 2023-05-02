import { Button } from "react-bootstrap";
import Title from "../../component/Title";
import adre_logo from "../../img/entry/logo/logo_ad.png"
import adre_title from "../../img/entry/title/adre.png"
import './css/entry_style.css'

function Adre() {
    return(
        <div className="entry_all">
        <Title name="Adrenalin"/>
        <div className="entry_logo">
            <img src={adre_logo}/>
        </div>
        <div className="entry_name">
            <img src={adre_title}/>
        </div>
        <div className="entry_info">
            <p>
                애드레날린은 2004년에 창설된 광고 소모임으로 광고를 뜻하는 AD와 열정을 의미하는 Adrenalin의 합성어이다.
                주위를 둘러보면 어디에나 존재하는 광고는 전달하고자 하는 메시지를 효과적으로 소비자에게 전하여 그들의 마음을 움직이기도 한다.
                애드레날린은 지면, 영상, 캠페인, 옥외 광고, 디지털 등 매체에 구애받지 않고 다양한 주제를 다루고 있으며 부산 국제 광고제와
                다양한 국내 광고 공모전에 참여하여 광고에 대한 실무적인 지식과 경험을 쌓을 수 있다.
            </p>
        </div>
        <div>
            <Button variant="outline" className="archive_button">Archive</Button>
        </div>
        </div>
    )
}

export default Adre;