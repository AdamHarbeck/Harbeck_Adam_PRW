import React from "react";

const Input = props=>{
    return(
        <input type={props.inputType} style={styles.inputStyle} placeholder={props.pHolder} />
    )
}
export default Input;

const styles={
    inputStyle: {
        width: '25rem',
        height: '3.5rem',
        display: 'inline-block',
        background: '#63768D',
        border: '.1rem solid #DAFFD6',
        borderRadius: '.5rem',
        fontFamily: `'Darker Grotesque', sans-serif`,
        fontSize: '2rem',
        boxShadow: 'inset 0 .1rem 2rem #435360',
        fontWeight: '300',
        letterSpacing: '.1rem',
        paddingLeft: '.5rem'
    }
}