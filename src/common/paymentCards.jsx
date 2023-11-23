import React from 'react';
import {payment_plans} from '../configs/signupstage';
import { useNavigate } from 'react-router-dom';


const PaymentCards=()=>{
 const navigate = useNavigate();

  const planFeatures=(p)=>{
   const c= p.map((c,index)=>{
        return(
            <div key={c.id} className='flexRow display'>
        <ul className='payment-list'>
          <span className='check-circle'></span>
          <li>{c.feature}</li>
        </ul>
      </div>
        
    ) 
    })
    return c;
   
  }
return(<div className='justContCenter flexRow display margTop40'>
        {payment_plans.map((pym,index)=>{
        return(<div className='select-cards' key={index} style={{padding:'1.7rem'}}>
        <div className='justContStart flexRow display'>
        <button className={`${pym.class}`}><span style={{color:"#FEFEFE"}}>{pym.type}</span></button>
        </div>
        <div className='justContStart flexRow display'>
        <h2>{ pym.title.includes("$")?<span className='plan-head'>{pym.title}<span  className='plan-month'>/Month</span></span>:<span className='plan-head'>{pym.title}</span>}</h2>
        </div>
        <span  className='plan-month'>Features:</span>
        <div className='justContStart flexCol display'>{planFeatures(pym.desc)}</div>
        {pym.title.includes("$")?<button className='plan-button' onClick={()=>{navigate("./create")}}>Subscribe</button>:<button className='plan-button-custom' onClick={()=>{navigate("./create")}}><span style={{color:"#FEFEFE"}}>Contact Us</span></button>}
        </div>)
        })}
</div>)
}
export default PaymentCards;