import Title from "../component/Title";
import Archive_name from "../component/archive_name";
import React from "react";


const Archieve=()=>{
    return(
        <>
        <Title name="Archieve"/>
        <div>
        <Archive_name pageName="Adrenalin"/>
        <Archive_name pageName="Dromapic"/>
        <Archive_name pageName="Greenbee"/>
        <Archive_name pageName="Hangulggol"/>
        <Archive_name pageName="Hyphen"/>
        <Archive_name pageName="Hips"/>
        <Archive_name pageName="I-Ray"/>
        <Archive_name pageName="Proto"/>
        <Archive_name pageName="Yadz"/>
        </div>
        <div className='blank_entry'/>        
        </>
    )
    
}
export default Archieve;