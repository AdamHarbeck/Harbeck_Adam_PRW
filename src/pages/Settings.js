import React from "react";
import Header from "../components/Header";
import {MdSettings} from "react-icons/all";

const Settings = () => {
    return(
        <div>
            <Header pageIcon={<MdSettings style={styles.icon}/>} pageTitle={'Settings'} />
        </div>
    )
}
export default Settings;

const styles = {
    icon: {
        width: '5rem',
        height: '5rem',
        color: '#544E61'
    }
}