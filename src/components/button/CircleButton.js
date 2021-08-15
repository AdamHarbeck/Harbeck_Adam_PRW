import React from "react";

// Props for an icon for the circle button
const CircleButton = props =>{
    return(
        <button style={styles.cirBtnContain}>
            {props.cBtnIcon}{props.btnInfo}
        </button>
    )
}
export default CircleButton;

const styles={
    cirBtnContain: {
        width: '5rem',
        height: '5rem',
        borderRadius: '2.5rem',
        border: 'transparent',
        background: 'transparent'
    }
}