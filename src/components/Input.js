import React from "react";

const Input = ({...props}) => {
    return(
        <div>
            <p style={styles.font}>{props.label}</p>
            <input type={props.type} style={props.inputStyle} defaultValue={props.value}/>
        </div>
    )
}
export default Input;

const styles = {
    font: {
        fontSize: '1.2rem',
        fontWeight: '300'
    }
}