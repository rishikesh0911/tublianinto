import React from 'react'
import logo from "../assets/logo.png";
import AccountCards from '../common/accountCards';
import TopNavigation from '../common/topNavigate';
import { useNavigate } from 'react-router-dom';
import Footer from '../common/footer';
import PaymentCards from '../common/paymentCards';


const AccountSetup=()=>{
 const navigate = useNavigate();
 const url = window.location.href;

return(<div className='container' >
    <div className='display flexRow' style={{padding:"2rem"}}>
    <img src={logo} alt="logo" className="images-login"/>
    <div className='width62'></div>
    <div className='display justContEnd'>
    <TopNavigation lookUp={url}/>
    </div>
    </div>
    <div className='display justContCenter alignCenter marginTop23'>
    <h1>How are you planning to use Tublian?</h1>
    </div>
    <div className='display justContCenter alignCenter'>
    <p>We will customize your experience based on your options</p>
    </div>
    <div className='display justContCenter alignCenter marginTop23'>
     <AccountCards/>
    </div>
    <div className='display justContCenter alignCenter marginTop23'>
    <button className='payment-next marginLeft12' onClick={()=>{navigate("./payment")}}>Proceed</button>
    </div>
    <div className="footer-bottom">
        <div className='display flexRow justContCenter alignCenter'>
    Privacy policy<span className='marginLeft12'>Terms</span>
   </div>
    </div>
    

</div>)
}
export default AccountSetup;