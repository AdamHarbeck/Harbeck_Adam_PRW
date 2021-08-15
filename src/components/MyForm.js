import React from "react";


const MyForm = props =>{
    return(
        <form style={styles.myForm}>
            <input type={'text'} style={styles.input} placeholder={props.pHolder} />
            <textarea style={styles.textarea} placeholder={props.tPHolder} />
        </form>
    )
}
export default MyForm;

const styles = {
    myForm: {
        width: '100%'
    },
    input: {
        width: '90%',
        height: '4rem',
        marginBottom: '1rem',
        background: '#DAFFD6',
        border: '.1rem solid',
        paddingLeft: '.5rem'
    },
    textarea: {
        width: '90%',
        height: '12rem',
        background: '#DAFFD6',
        paddingLeft: '.5rem',
        border: '.1rem solid'
    }
}