import React from "react";

const Paragraph = props =>{
    return(
        <p style={styles.container}>{props.paraInfo}</p>
    )
}
export default Paragraph;

const styles = {
    container: {
        fontSize: '1.8rem',
        width: '98%',
        height: '12rem',
        border: '.1rem solid',
        borderRadius: '.5rem',
        margin: '0 auto',
        background: '#DFEEF6'
    }
}