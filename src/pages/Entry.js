import Title from '../component/Title'
import './css/entry_style.css'
import { Link, Route, Routes } from 'react-router-dom'
import React from 'react'
import Entry_name from '../component/EntryName'
import Adre from './entry_info/adre'


const Entry=()=>{
    return (
        <>
        <div>
        <Title name="Entry"/>
        <div>
        <Entry_name pageName="Adrenalin"/>
        <Entry_name pageName="Dromapic"/>
        <Entry_name pageName="Greenbee"/>
        <Entry_name pageName="Hangulggol"/>
        <Entry_name pageName="Hyphen"/>
        <Entry_name pageName="Hips"/>
        <Entry_name pageName="I-Ray"/>
        <Entry_name pageName="Proto"/>
        <Entry_name pageName="Yadz"/>
        </div>
        <div className='blank_entry'/>
        </div>
        </>
    )

    
}

export default Entry;