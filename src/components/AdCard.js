import React from "react";

const AdCard = props =>{
    return(
        <div style={styles.container}>
            <img src={props.imgSrc} alt={props.imgAlt} style={styles.imgStyle} />
        </div>
    )
}
export default AdCard;

const styles = {
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        border: '.1rem solid'
    },
    imgStyle:{
        maxWidth: '100%',
        height: '30rem',
        objectFit: 'cover',
    }
}

