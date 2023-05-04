import Title from '../component/Title'
import './css/entry_style.css'
import { Link, Route, Routes } from 'react-router-dom'
import React from 'react'
import Entry_name from '../component/EntryName'
import Adre from './entry_info/adre'


const Entry=()=>{
    return (
        <div>
        <div>
        <Entry_name pageName="ADRENALIN"/>
        <Entry_name pageName="DROMAPIC"/>
        <Entry_name pageName="GREENBEE"/>
        <Entry_name pageName="HANGULGGOL"/>
        <Entry_name pageName="HYPHEN"/>
        <Entry_name pageName="HIPS"/>
        <Entry_name pageName="I-RAY"/>
        <Entry_name pageName="PROTO"/>
        <Entry_name pageName="YADZ"/>
        </div>
        <div className='blank_entry'/>
        </div>
    )

    
}

export default Entry;