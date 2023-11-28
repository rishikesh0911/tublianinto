import React from 'react';
import sucess from "../assets/icons/sucess.svg";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';


const SuccessModal=()=>{
    const navigate = useNavigate();
return(<div className="popup-container">
<div className="overlay-modal-sucess">
<img src={logo} alt="logo" className="images-login-sucess"/>
<img src={sucess} alt="scs" className="overlay-modal-sucess-logo"/>
<div className='justContCenter alignCenter flexCol display'>

<span className='sucess-paid'>Payment Sucessful</span>
<span className='sucess-message'>Your Payment went through successfully.</span>

</div>
<button className='sucess-button marginLeft12' onClick={()=>{navigate("./login")}}>Proceed</button>

</div>



</div>)
}
export default SuccessModal;