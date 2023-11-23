import React from 'react'
import logo from "../assets/logo.png";
import PaymentCards from '../common/paymentCards';
import TopNavigation from '../common/topNavigate';
import { useNavigate } from 'react-router-dom';

const Payment=()=>{
 const navigate = useNavigate();

return(<div className='container' >
    <div className='display flexRow' style={{padding:"2rem"}}>
    <img src={logo} alt="logo" className="images-login"/>
    <div className='width62'></div>
    <div className='display justContEnd'>
    <TopNavigation pageNo={"4"}/>
    </div>
    </div>
    <div className='display justContCenter alignCenter marginTop23'>
    <h1>Payment Plan</h1>
    </div>
    <div className='display justContCenter alignCenter'>
    <p>We will customize your experience based on your options</p>
    </div>
  
        <div className="select-period">
        <div className="monthly-plan">Monthly</div> 
        <div className="anually-plan">Anually</div>
        <span className="discount-plan"><span className="disc-text">20%Off</span></span>
        </div>
        <div className='display justContCenter alignCenter marginTop23'>
  <PaymentCards/>
    </div>
    <div className="footer-bottom">
        <div className='display flexRow justContCenter alignCenter'>
    Privacy policy<span className='marginLeft12'>Terms</span>
   </div>
    </div>
    

</div>)
}
export default Payment;