import React from 'react';
import '../styles/light.css';
import logo from "../assets/logo.png";
import siteBanner from "../assets/image_container.png";

import "../styles/flexStyles.css";
import "../styles/layout.css";


const Login=()=>{
    return(<div className='container'>
    <div className='display'>
    <div className='width50'>
    <img src={siteBanner} alt="logo-banner" className="banner-left"/>
    </div>
    <div className='width50'>
  <div className='display flexRow'>
<img src={logo} alt="logo" className="images-login"/>
<ul className='list-flex'>
    <li>1.Get Started</li>
    <li>2.Create Account</li>
    <li>3.Account Setup</li>
    <li>4.Payment</li>
</ul>
  </div>
  <div className='display flexCol width55 margTop40'>
    <div className='marginLeft12'>
        <h1 className='highlight'>Get Started</h1>
        <h4>Start recruiting Streetcred developers,Today!!</h4>
    </div>
        <input
        placeholder='First Name'/>
            <input
        placeholder='Last Name'/>
        <button className='login-button marginLeft12'>Proceed</button>
    </div>
    <div className='display flexRow marginLeft12'>
       <h4>Already have an account?</h4><a href="#" className='marginTop23 marginLeft12 highlight'>Login</a> 
       
        </div>
        <div className='display flexRow justContStart marginLeft12 footer'>
        Privacy policy<span className='marginLeft12'>Terms</span>
       </div>
    </div>

    </div>
    </div>
    )
}
export default Login;