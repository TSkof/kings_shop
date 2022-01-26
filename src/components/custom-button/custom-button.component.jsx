import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, linkbutton, ...otherProps}) => (
    <button 
        className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} ${linkbutton ? "link-button" : ""} custom-button`}
        {...otherProps} 
    >
        {children}
    </button>
);

export default CustomButton;