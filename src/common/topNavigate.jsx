import React,{useState} from 'react';
import { snp } from '../configs/signupstage';

const TopNavigation=({lookUp})=>{
  const [pathClicked,setPathClicked]=useState("")
  const getPathNotification=(route)=>{
    if(pathClicked.length&&lookUp.includes(pathClicked)){
      return true
    }
    else if(lookUp.includes(route)){
return true
    }
    else{
      return false;
    }
  }
return(  <>
    {snp.map((rn,index)=>{

        return(<ul className={getPathNotification(rn.path)?`list-flex`:`unsel-list`} onClick={()=>setPathClicked(rn.path)}><li key={index}>{rn.stat}</li></ul>)
    })}
  </>)
}
export default TopNavigation 