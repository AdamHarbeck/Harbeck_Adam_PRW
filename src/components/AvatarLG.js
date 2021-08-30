import React from "react";

const AvatarLG = props =>{
    return(
        <img src={props.src} alt={props.alt} style={styles.container} />
    )
}
export default AvatarLG;

const styles={
    container: {
        width: '15rem',
        borderRadius: '15rem',
        height: '15rem',
        objectFit: 'cover',
        marginRight: '2rem'
    }
}
