import React from "react";
import Header from "../components/Header";
import {IoPersonCircle} from "react-icons/all";

const Profile = () => {
    return(
        <div>
            <Header pageIcon={<IoPersonCircle style={styles.icon}/>} pageTitle={'Profile'} />
        </div>
    );
}
export default Profile;

const styles = {
    icon: {
        width: '5rem',
        height: '5rem',
        color: '#544E61'
    }
}