import React from "react";

const LNavBtn = props=>{
    return(
        <button style={styles.container} >
            {props.btnName}
        </button>
    )
}
export default LNavBtn;

const styles={
    container:{
        width: '100%',
        height: '5rem',
        background: '#D9E5D6',
        border: 'none',
        fontSize: '2rem',
        cursor: 'pointer',
        fontFamily: `'Questrial', sans-serif`
    }
}