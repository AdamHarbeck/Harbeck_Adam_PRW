import React from "react";

const Textarea = props=>{
    return(
        <textarea style={styles.inputStyle} placeholder={props.pHolder} />
    )
}
export default Textarea;

const styles={
    inputStyle: {
        width: '50rem',
        height: '20rem',
        background: '#DFEEF6',
        border: '.1rem solid',
        borderRadius: '.5rem',
        fontFamily: `'Questiral', sans-serif`,
        margin: '1rem'
    }
}