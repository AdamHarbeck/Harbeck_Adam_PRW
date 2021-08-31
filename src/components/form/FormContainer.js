import React from "react";
import Heading from "../Heading";
import AvatarLG from "../AvatarLG";
import SmallForm from "./SmallForm";
import LargeForm from "./LargeForm";

const FormContainer = ({userData}) => {

    return(
        <div style={styles.container}>
            {console.log(userData)}
            <Heading heading={'Edit Profile'} />
            <div style={styles.avatar}>
                <AvatarLG src={userData.picture.large} alt={'Profile picture'} />
            </div>
            <div style={styles.formContainer}>
                <SmallForm type={'text'} type2={'text'} label={'First Name'}
                           label2={'Last Name'} value={userData.name.first} value2={userData.name.last}/>

                <LargeForm type={'email'}  label={'Email'} value={userData.email}/>
                <LargeForm type={'tel'} label={'Contact Number'} value={userData.phone}/>
                <LargeForm type={'text'} label={'Address'} value={`${userData.location.number} ${userData.location.name}`}/>

                <SmallForm type={'text'}  label={'City'} type2={'text'}
                           label2={'State'} value={userData.location.city} value2={userData.location.state}/>
                <SmallForm type={'number'} label={'Zip Code'} type2={'text'}
                           label2={'Country'} value={userData.location.postcode} value2={userData.location.country}/>

                <LargeForm type={'password'} label={'Password'} value={userData.login.password}/>
                <button type={"submit"} style={styles.btn}>SAVE</button>
            </div>

        </div>
    )
}
export default FormContainer;

const styles= {
    container: {
        width: '100%',
        marginLeft: '4rem'
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
    },
    formContainer: {
        width: '50rem',
        margin: '0 auto'
    },
    btn: {
        width: '10rem',
        height: '4rem',
        borderRadius: '.5rem',
        marginTop: '1rem',
        background: '#bba0b2',
        color: '#fcecc9',
        fontWeight: '700',
        border: '.1rem solid #544E61'
    }
}