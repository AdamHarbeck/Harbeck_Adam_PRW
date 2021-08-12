import React from "react";

const TitleInput = props=>{
    return(
        <input type={props.inputType} style={styles.inputStyle} placeholder={props.pHolder} />
    )
}
export default TitleInput;

const styles={
    inputStyle: {
        width: '50rem',
        height: '3rem',
        background: '#DFEEF6',
        border: '.1rem solid',
        borderRadius: '.5rem',
        fontFamily: `'Questiral', sans-serif`,
        margin: '1rem 1rem 0 1rem'
    }
}