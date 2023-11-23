import React,{useState,useEffect} from 'react';
import '../styles/light.scss';
import logo from "../assets/logo.png";
import TopNavigation from '../common/topNavigate';
import siteBanner from "../assets/image_container.png";
import { snp } from '../configs/signupstage';
import "../styles/flexStyles.scss";
import "../styles/layout.scss";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Footer from '../common/footer';


const Login=()=>{
 const {updateUserCredentials}=useUserContext();
 const navigate = useNavigate();

const [entryUser,setEntryUser]=useState({firstName:"",lastName:""});
useEffect(() => {
    updateUserCredentials(entryUser);
}, [entryUser])

const handleUserNames=(e)=>{
    const {name,value}=e.target
    setEntryUser((_)=>{return {..._,[name]:value}})
}
    return(<div className='container'>
    <div className='display'>
    <div className='width50'>
    <img src={siteBanner} alt="logo-banner" className="banner-left"/>
    </div>
    <div className='width50' style={{padding:"2rem"}}>
  <div className='display flexRow'>
<img src={logo} alt="logo" className="images-login"/>
<TopNavigation pageNo={"1"}/>
  </div>
  <div className='display flexCol width55 margTop40'>
    <div className='marginLeft12'>
        <h1 className='highlight'>Get Started</h1>
        <p style={{whiteSpace:'nowrap'}}>Start recruiting Streetcred developers,Today!!</p>
    </div>
    <input
    value={entryUser.firstName}
    name='firstName'
    onChange={handleUserNames}
    placeholder='First Name'/>
    <input
    value={entryUser.lastName}
    name='lastName'
    onChange={handleUserNames}
    placeholder='Last Name'/>
    <button className='login-button marginLeft12' onClick={()=>{navigate("./create")}}>Proceed</button>
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
export default Login;