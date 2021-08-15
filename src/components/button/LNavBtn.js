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
        border: 'none',
        fontSize: '2.4rem',
        cursor: 'pointer',
        fontFamily: `'Darker Grotesque', sans-serif`,
        background: '#B9D2DF',
        letterSpacing: '.1rem'
    }
}