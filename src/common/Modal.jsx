import React ,{useState} from 'react';
import modalclose from "../assets/icons/modal_close.svg";
import stripe1 from "../assets/icons/stripe1.svg";
import gpay from "../assets/icons/googlepay.svg";
import { useNavigate } from 'react-router-dom';
import card from "../assets/icons//crdcard.svg"
import lock from "../assets/icons/lock.svg";
import vmas from "../assets/icons/vmaz.svg";
import logo from "../assets/logo.png";


const Modal=(props)=>{
  const navigate = useNavigate();
  const {type,title}=props.preference;
  const [mode, setMode] = useState([{id:23,modeType:1,checked:false},{id:32,modeType:2,checked:false}]);
  const handleCheckboxChange = (id) => {
    setMode((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : { ...item, checked: false }
      )
    );
  }
return( <div className="popup-container">
  <div className="overlay-modal" >
<div className="justContSpcBtwn flex display">
<img src={logo} alt="logo" className="images-modal"/>
<img src={modalclose} alt="close" onClick={props.onClose} className="modal-close"/>
</div>
<div className="plan-details">
<div className="plan-details-mainhead">
  <p className="payment-plantext">Monthly plan</p>
  <p className="payment-change" style={{color:"#FDD649",cursor:'pointer'}} onClick={props.onClose}>Change plan</p>
</div>
<div className="line-pay"></div>
<div className="display flex">
<div className='justContStart flexRow display'>
        <button className={`${props.preference.class} marginLeft12`}><span style={{color:"#FEFEFE"}}>{type}</span></button>
        </div>
{/* {type} */}
</div>
<div className="plan-details-mainhead">
  <p className="payment-plantext">Total:</p>
  <p className="payment-change"><span className='currstyles'>USD</span>{title}<span className='currstyles'>/Month</span></p>
</div>
<div className='justContStart flexRow display margTop40'>
        <span className='payment-plantext'>Payment method</span>

        </div>
        <div className='justContStart flexRow display'>
        <p>Choose how you'd like to pay</p>
        </div>
        <div className='payment-options-select'>
        <ul className='payment-lists'>
        <li className={mode[0].checked?'list-select-checked':'list-select'}>
    <input
            type="checkbox"
            className="check-circle-opt"
            id={`checkbox-credit`}
            checked={mode[0].checked}
            onChange={() => {handleCheckboxChange(mode[0].id)}}
          />
    <label htmlFor={`checkbox-credit`}> <span className='flexRow display'><img src={card} alt="credit-card" className="credit-card"/>Credit Card</span></label>
        </li>
        <li className={mode[1].checked?'list-select-checked':'list-select'}>
        <input
            type="checkbox"
            className="check-circle-opt"
            id={`checkbox-gpay`}
            checked={mode[1].checked}
            onChange={() => {handleCheckboxChange(mode[1].id)}}
          />
          <label htmlFor={`checkbox-gpay`}> <span className='flexRow display'><img src={gpay} alt="goole-card" className="google-card"/></span></label>
        </li>
        </ul>
        </div>


    <div className='justContStart flexRow display'>
    <span className='payment-plantext-details'>Payment Details</span>
        </div>
    <div className='flexCol flex display'>
       <input
    value=""
    name='firstName'
    className='paymentboxes'
    onChange={"handleUserNames"}
    placeholder='Email'/>
    <input
    value=""
    name='firstName'
    className='paymentboxes'
    onChange={"handleUserNames"}
    placeholder='Card Holder'/>
    <div className='carddiv justContSpcBtwn flex display'>
    <img src={lock} alt="goole-card" className="credit-card"/>
    <input
    value=""
    name='firstName'
    className='paymentboxescard'
    onChange={"handleUserNames"}
    placeholder='Card Number'/>
    <img src={vmas} alt="goole-card" className="credit-card-modes"/>
    </div>


    <div className="plan-details-mainhead" style={{marginBottom:'2rem'}}>
     <input
    value={null}
    name='firstName'
    className='payment-monthcvv'
    onChange={"handleUserNames"}
    type="text"
    placeholder='MM/YY'/>
    <input
    value=""
    name='firstName'
    className='payment-monthcvv'
    onChange={"handleUserNames"}
    placeholder='CVV'/>
</div>


<input
value=""
name='firstName'
className='paymentboxes'
onChange={"handleUserNames"}
type="select"
placeholder='Country'/>
      </div>




<p className='marginBotttom12'>By clicking below, you agree to our <span className='textColorYellow'>Terms</span>,<span className='textColorYellow'>Privacy Policy</span>  and <span className='textColorBlue'>Automatic Renewal</span>. Tublian will charge you $49.99 (plus Tax) each month until you cancel you subscription in account settings.</p>
<button className='payment-process-sucess' onClick={()=>props.setSucess(true)}>Pay {title}</button>

</div>
{/* <div className={props.subscribe?"footer-bottom":"footer-bottom-hide"}>
  <div className='display flexRow justContStart' style={{width:'540px'}}>
       
<img src={stripe1} alt="logo" className="payment-brand"/>
    <li className='marginLeft12 margTop10'>Powered by Stripe.com</li>
   
  </div>

    </div> */}



  </div>
  <div className='display flexRow justContStart' style={{width:'540px',position:"absolute",bottom:0}}>
       
       <img src={stripe1} alt="logo" className="payment-brand"/>
           <li className='marginLeft12 margTop10'>Powered by Stripe.com</li>
          
         </div>

</div>)
}
export default Modal;