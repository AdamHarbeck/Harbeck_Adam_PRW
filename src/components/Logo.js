import React from "react";

const Logo = props => {
    return(
        <p style={styles.logo}>
            {props.logoName}
        </p>
    )
}
export default Logo;

const styles= {
    logo: {
        fontFamily: `'Amita', cursive`,
        fontSize: '4rem',
        letterSpacing: '.1rem',
        color: '#30011E',
        marginRight: '4rem'
    }
}