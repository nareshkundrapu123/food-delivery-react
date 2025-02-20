import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants"

const useRestarant=(resId)=>{

    console.log(resId);

    const[resmenuinfo,setresmenuinfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data=await fetch(MENU_API+resId);
        
        const json=await data.json();
        console.log(json);
        setresmenuinfo(json.data);
    };


    return resmenuinfo;
};
 
export default useRestarant;