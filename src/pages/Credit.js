import './css/credit_style.css'
import twinkle from '../img/mini_twinkle.png'
import Title from '../component/Title'

const Credit=()=>{
    return (
        <>
        <Title name="Credit"/>
        <div className="credit">
        <div className="credit_title">
        <p><img src={twinkle} alt='siso'/>2023 SISO전 준비위원회<img src={twinkle} alt='siso'/></p>
        </div>
            <div className="credit_part">
                <p>
                    아트디렉팅팀
                </p>
            </div>
            <div className="credit_names">
                <p>
                    손서연 오다은
                </p>
            </div>
            <div className="credit_part">
                <p>
                    운영팀
                </p>
            </div>
            <div className="credit_names">
                <p>
                    오승주 이민석
                </p>
            </div>
            <div className="credit_part">
                <p>
                    홍보팀
                </p>
            </div>
            <div className="credit_names">
                <p>
                    박서연 조예봄
                </p>
            </div>
            <div className="credit_part">
                <p>
                    공간기획팀
                </p>
            </div>
            <div className="credit_names">
                <p>
                    손서연 오다은 전서현 황예지
                </p>
            </div>
            <div className="credit_part">
                <p>
                    연사초청팀
                </p>
            </div>
            <div className="credit_names">
                <p>
                    김성재 허은제
                </p>
            </div>
            <div className="credit_part">
                <p>
                 예산팀
                </p>
            </div>
            <div className="credit_names">
                <p>
                    이다영 이윤정 이혜지
                </p>
            </div>
            <div className="credit_part">
                <p>
                    현장관리팀
                </p>
            </div>
            <div className="credit_names">
                <p>
                    박수민 이수빈 구재혁 이재원 한재원 이현
                </p>
            </div>
        </div>
        </>
        
    )

    
}

export default Credit;