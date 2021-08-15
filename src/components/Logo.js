import React from "react";

const Logo = props => {
    return(
        <img src={props.logoSrc} alt={'Company logo'} style={styles.logo}/>
    )
}
export default Logo;

const styles={
    logo: {
        width: '25rem',
        marginRight: '2rem'
    }
}