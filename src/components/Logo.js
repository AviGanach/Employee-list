import React from 'react';

function Logo(props) {
    //--- get image & title from 'App' parent component---// 
    const {imgLogo,title} = props

    return(
        <div className="text-center" style={{backgroundColor:"" }}>
        <img className='' src={imgLogo} alt="logo" ></img>
            <h1>{title}</h1>
        </div>
    )
}
export default Logo;
