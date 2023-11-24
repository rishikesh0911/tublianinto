import React,{useState} from 'react';
import {account_options} from '../configs/signupstage';
import people1 from "../assets/icons/people1.png";
import people2 from "../assets/icons/people2.png";
import team from "../assets/icons/team.png";


const AccountCards=()=>{

  const [items, setItems] = useState(account_options);

  const handleCheckboxChange = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : { ...item, checked: false }
      )
    );
  }
return(<div className='justContCenter flexRow display margTop40'>
    {items.map((act,index)=>{
        return(<div className={act.checked?'select-cards-checked':'select-cards'} key={index}>
        <div className='display flexRow justContEnd'>
        <input
            type="checkbox"
            className="check-circle-opt" 
            id={`checkbox-${act.id}`}
            checked={act.checked}
            onChange={() => handleCheckboxChange(act.id)}
          />
          <label htmlFor={`checkbox-${act.id}`}></label> 
        </div>
        <div className='margTop40'>
        <div className='display flexRow justContCenter alignCenter'>
        <img src={act.img.includes("people1")?people1:act.img.includes('people2')?people2:team} alt="logo" className="team-prex"/>
        </div>
        <div className='justContCenter alignCenter flexRow display marginTop23'>
        <h2> { act.title}</h2>
        </div>
        <div className='flexRow display justContCenter marginTop23'>
        <p className='acc-desc'>{ act.desc}</p>
        </div>
        </div>
        </div>)
        })}
        </div>)
}

export default AccountCards;