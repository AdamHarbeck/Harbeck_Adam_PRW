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
                <AvatarLG src={'https://picsum.photos/300/300?random-1'} alt={'Profile picture'} />
            </div>
            <div style={styles.formContainer}>
                <SmallForm type={'text'} type2={'text'} label={'First Name'}
                           label2={'Last Name'} value={userData.name} value2={userData.name}/>

                <LargeForm type={'email'}  label={'Email'} value={''}/>
                <LargeForm type={'tel'} label={'Contact Number'} value={''}/>
                <LargeForm type={'text'} label={'Address'} value={''}/>

                <SmallForm type={'text'}  label={'City'} type2={'text'}
                           label2={'State'} value={''} value2={''}/>
                <SmallForm type={'number'} label={'Zip Code'} type2={'text'}
                           label2={'Country'} value={''} value2={''}/>

                <LargeForm type={'password'} label={'Password'} value={''}/>
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
        justifyContent: 'center'
    },
    formContainer: {
        width: '50rem',
        margin: '0 auto'
    }
}