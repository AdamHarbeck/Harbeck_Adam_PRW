import React from "react";

// Props for an icon for the circle button
const RectBtn = props =>{
    return(
        <button style={styles.container}>
            {props.btnInfo}
        </button>
    )
}
export default RectBtn;

const styles = {
    container: {
        height: '14rem',
        width: '10rem',
        margin: '0 auto',
        border: '.1rem solid',
        borderRadius: '.5rem',
        background: '#FFA21F'
    }
}