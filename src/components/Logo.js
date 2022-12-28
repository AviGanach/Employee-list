import React from 'react';
import "./Logo.css"
import PropTypes from 'prop-types';


function Logo(props) {
    //--- get image & title from 'App' parent component---// 
    const {imgLogo,title} = props

    return(
        <div>
        <img className='imgLogo' src={imgLogo} alt="logo" />
            <h1 className='titleLogo'>{title}</h1>
        </div>
    )
}
Logo.propTypes = {
    imgLogo: PropTypes.string,
    title: PropTypes.string
  };
export default Logo;
