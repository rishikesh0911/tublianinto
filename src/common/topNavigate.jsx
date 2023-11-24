import React from 'react';
import { snp } from '../configs/signupstage';

const TopNavigation=({lookUp})=>{
return(  <>
    {snp.map((rn,index)=>{
 
        return(<ul className={`${lookUp.includes(rn.path)?`list-flex`:`unsel-list`}`}><li key={index}>{rn.stat}</li></ul>)
    })}
  </>)
}
export default TopNavigation