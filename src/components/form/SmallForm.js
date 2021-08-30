import React from "react";
import Input from "../Input";

const SmallForm = ({...props}) => {
    return(
        <div style={styles.container}>
            <Input type={props.type} label={props.label} inputStyle={styles.smInput} value={props.value}/>
            <Input type={props.type2} label={props.label2} inputStyle={styles.smInput} value={props.value2}/>
        </div>
    )
}
export default SmallForm;

const styles = {
    container: {
        width: '50rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    smInput: {
        height: '3rem',
        width: '24rem',
        boxShadow: '0rem 0rem .8rem #bba0b2',
        border: '.1rem solid #bba0b2',
        background: '#fcecc9'
    }
}