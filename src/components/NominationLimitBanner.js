import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

const NominationLimitBanner = (props) => {

  return(
    <div>
      <div id={props.id}>
        <p>{props.content}</p>
        <IoCloseSharp onClick={()=>document.getElementById(props.id).style.setProperty('display','none')}/>
      </div>
    </div>
  );

}

export default NominationLimitBanner;