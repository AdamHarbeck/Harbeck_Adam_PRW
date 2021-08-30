import React from "react";
import Input from "../Input";

const LargeForm = (props) => {
    return(
            <Input type={props.type} label={props.label} inputStyle={styles.container}
            value={props.value}/>
    )
}
export default LargeForm;

const styles = {
    container: {
        width: '49.1rem',
        height: '3rem',
        boxShadow: '0rem 0rem .8rem #bba0b2',
        border: '.1rem solid #bba0b2',
        background: '#fcecc9'
    }
}