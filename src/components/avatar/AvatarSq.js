import React from "react";

const AvatarSq = props =>{
    return(
        <img src={props.sourceInfo} alt={props.altInfo} style={styles.container} />
    )
}
export default AvatarSq;

const styles = {
    container:{
        width: '7rem',
        height: '7rem',
        border: '.1rem solid',
        objectFit: 'cover'
    }
}