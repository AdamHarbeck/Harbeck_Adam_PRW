import React from "react";
import Header from "../components/Header";
import {MdEmail} from "react-icons/all";

const Email = () => {
    return(
        <div>
            <Header pageIcon={<MdEmail style={styles.icon}/>} pageTitle={'Email'} />
        </div>
    )
}
export default Email;

const styles = {
    icon: {
        width: '5rem',
        height: '5rem',
        color: '#544E61'
    }
}