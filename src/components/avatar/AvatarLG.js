import React from "react";

const AvatarLG = props =>{
    return(
        <img src={props.sourceInfo} alt={props.altInfo} style={styles.container} />
    )
}
export default AvatarLG;

const styles={
    container: {
        width: '10rem',
        borderRadius: '10rem',
        height: '10rem',
        objectFit: 'cover'
    }
}
