import React from 'react';
import { snp } from '../configs/signupstage';

const TopNavigation=({pageNo})=>{
return(  <>
    {snp.map((rn,index)=>{
        return(<ul className={`${rn.includes(pageNo)?`list-flex`:`unsel-list`}`}><li key={index}>{rn}</li></ul>)
    })}
  </>)
}
export default TopNavigation