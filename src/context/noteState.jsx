import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState =(props)=>{
    const s1={
        "name" : "Satvik",
        "email" : "null",
        "login" :  false
    };
    const s3={
        "companyname":"company",
        "email": "null",
        "login":false
    }
    const s2={
        companyName:"",
        ctc:"",
        eligibilityCriteria:"",
        role:"",
        location:"",
        qualification:""
    }
    const [state,setState]= useState(s1);
    const [cstate,setCState]=useState(s2);
    const update=(props)=>{
        setState({
            "name":props.name,
            "email":props.email
        })
    }
    const update1=(props)=>{
        setCState({
            "name":props.name,
            "email":props.email
        })
    }
    return (
        <NoteContext.Provider value={{state,s2 ,update, s3, update1 }}>
            {props.children}
        </NoteContext.Provider>
    );
};
export default NoteState;



