import React from "react";
import Header from "../components/Header";
import {IoMdDocument} from "react-icons/all";

const Form = () => {
    return(
        <div>
            <Header pageIcon={<IoMdDocument style={styles.icon}/>} pageTitle={'Form'} />
        </div>
    )
}
export default Form;

const styles = {
    icon: {
        width: '5rem',
        height: '5rem',
        color: '#544E61'
    }
}