import twinkle from '../img/mini_twinkle.png'
import './css/entryname_style.css'
import { Link } from 'react-router-dom'

const Entry_name=(props)=>{
    return(
        <div className='entry_func'>
            <Link to={`/entry/${props.pageName}`} className='link_entry'>
            <img src={twinkle}/> {props.pageName}
            </Link>
            <hr/>
        </div>
    )
}

export default Entry_name;