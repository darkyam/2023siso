import Title from "../component/Title";
import Archive_name from "../component/archive_name";
import React from "react";


const Archieve=()=>{
    return(
        <>
        <Title name="Archieve"/>
        <div>
        <Archive_name pageName="ADRENALIN"/>
        <Archive_name pageName="DROMAPIC"/>
        <Archive_name pageName="GREENBEE"/>
        <Archive_name pageName="HANGULGGOL"/>
        <Archive_name pageName="HYPHEN"/>
        <Archive_name pageName="HIPS"/>
        <Archive_name pageName="I-RAY"/>
        <Archive_name pageName="PROTO"/>
        <Archive_name pageName="YADZ"/>
        </div>
        <div className='blank_entry'/>        
        </>
    )
    
}
export default Archieve;