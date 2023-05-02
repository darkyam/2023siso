import twinkle from '../img/mini_twinkle.png'
import './css/title_style.css'


function Title(props){
    return (
        <div className='title'>
            <div>
                <p><img src={twinkle}/>{props.name}</p>
            </div>
            <hr/>
        </div>
    )
}

export default Title;