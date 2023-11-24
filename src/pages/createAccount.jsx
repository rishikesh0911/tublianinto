import React,{useState,useEffect} from 'react';
import '../styles/light.scss';
import logo from "../assets/logo.png";
import google from "../assets/icons/go1.png";
import Safari from "../assets/Safari.png";
import d1 from "../assets/icons/d1.png";
import d2 from "../assets/icons/d2.png";
import check from "../assets/icons/tick-circle.png";
import { snp,loginCriteria } from '../configs/signupstage';
import TopNavigation from '../common/topNavigate';
import "../styles/flexStyles.scss";
import "../styles/layout.scss";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Footer from '../common/footer';


const CreateAccount=()=>{
 const {updateUserCredentials,user}=useUserContext();
 const navigate = useNavigate();
 const url = window.location.href;

const [credentials,setCredentials]=useState({email:"",password:""});
const [userName,setUserName]=useState({});

useEffect(() => {
   if(user){
    setUserName(user)
   }
}, [user])


const handleUserNames=(e)=>{
    const {name,value}=e.target
    setCredentials((_)=>{return {..._,[name]:value}})
}
    return(<div className='container'>
    <div className='display'>
    <div className='width50 banner-create-account'>
    <img src={d1} alt="user-prof" className="d1"/> 
    <div className='display flexRow justContCenter alignCenter' style={{height:'80vh'}}>
    <img src={Safari} alt="user-prof" className="user-profile"/> 
    </div>
    <img src={d2} alt="user-prof" className="d2"/> 
    </div>
    <div className='width50'  style={{padding:"2rem"}}>
    <div className='display flexRow'>
    <img src={logo} alt="logo" className="images-login"/>
    <TopNavigation lookUp={url}/>
    </div>
  <div className='display flexCol width55 margTop40'>
    <div className='marginLeft12'>
        <h1 className='highlight'>Create Account</h1>
        <h4>Creating Account for @<span className='user-name'>{`${userName.firstName} ${userName.lastName}`}</span></h4>
    </div>
    <input
    value={credentials.email}
    name='email'
    onChange={handleUserNames}
    placeholder='Email'/>
    <input
    value={credentials.password}
    name='password'
    type="password"
    onChange={handleUserNames}
    placeholder='Password'/>
     <div className='display flexRow'  style={{ flexWrap: 'wrap' }}>
       {loginCriteria.map((lc,index)=>{
    return(<div style={{width:'180px',height:'40px'}} className='display flexRow alignCenter marginBottom12' key={index}>
   <img src={check} alt="check" className="signup-check"/> 
   <h5 className='login-text-criteria'>{lc}</h5>
        </div>)
       })}
        </div>
    <button className='login-button marginLeft12' onClick={()=>{navigate("./setup")}}>Create Account</button>
    <div className='flexRow display marginLeft28'>
    <div className='line'></div><span className='marginTop23'>Or</span><div className='marginLeft12 line'></div>
    </div>

    <button className='google-sign flexRow display justContCenter alignCenter marginLeft12'><span> <img src={google} alt="google" className="google-logo"/> </span>Sign up with Google</button>
    
    </div>

    <div className='display flexRow marginLeft12'>
       <h4>Already have an account?</h4><a href="#" className='marginTop23 marginLeft12 highlight'>Login</a> 
        </div>
        <Footer/>
       
    </div>

    </div>
    </div>
    )
}
export default CreateAccount;