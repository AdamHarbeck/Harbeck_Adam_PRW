import React from "react";

const Input = props=>{
    return(
        <input type={props.inputType} style={styles.inputStyle} placeholder={props.pHolder} />
    )
}
export default Input;

const styles={
    inputStyle: {
        width: '20rem',
        height: '3rem',
        display: 'inline-block',
        background: '#DFEEF6',
        border: '.1rem solid',
        borderRadius: '.5rem'
    }
}