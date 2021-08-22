import React from "react";
import {NavLink} from "react-router-dom";

const Logo = ({logo}) => {
    return(
        <div style={styles.container}>
            <NavLink to={'/Dashboard'} style={styles.link}>
                <img src={logo} style={styles.logo} alt={'Company logo'} />
            </NavLink>

        </div>
    )
}
export default Logo;

const styles = {
    logo:{
        width: '90%',
        display: 'inline-block',
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem',
        paddingTop: '1rem'
    }
}