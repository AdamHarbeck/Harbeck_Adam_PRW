import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {IoPersonCircle} from "react-icons/all";
import FormContainer from "../components/form/FormContainer";

function Profile(){
    const [userData, setUserData] = useState([]);

    useEffect(() => {
       async function fetchData(){
           const response = await fetch('https://randomuser.me/api/1.3/');
           const data = await response.json();
           console.log(data);
           const [profile] = data.results;
           console.log([profile]);
           setUserData([profile]);
           console.log(userData);
       }
       fetchData();
    }, []);

    return(
        <div>
            <Header pageIcon={<IoPersonCircle style={styles.icon}/>} pageTitle={'Profile'} />
            <div>
                {console.log(userData)}
                {userData && <FormContainer key={userData.id} userData={userData} />}}
                {/*{userData.map((userData, id) => (*/}
                {/*    <FormContainer key={id} userData={userData} />*/}
                {/*))}*/}
            </div>
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