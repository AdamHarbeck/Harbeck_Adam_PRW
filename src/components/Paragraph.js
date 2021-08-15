import React from "react";

const Paragraph = props =>{
    return(
        <p style={styles.container}>{props.paraInfo}</p>
    )
}
export default Paragraph;

const styles = {
    container: {
        fontSize: '2rem'
    }
}