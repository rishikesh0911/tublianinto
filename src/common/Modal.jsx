import React from 'react';

const Modal=(props)=>{
return( <div className="popup-container">

  <div className="overlay-modal">

 <div onClick ={props.onClose}className='flexRow display justContEnd'>
      <span className='check-circle'></span>
      </div>


  </div>

</div>)
}
export default Modal;