import React from "react";

import AvatarSq from "./avatar/AvatarSq";
import profPic from '../images/profile.jpg'
import RectBtn from "./button/RectBtn";
import SqreBtn from "./button/SqreBtn";
import {
    HiOutlineLocationMarker,
    HiOutlinePhotograph,
    HiOutlineVideoCamera
} from "react-icons/all";



// In this div there will be the input, textarea, 3 small round buttons, the avatar, and the post button
const CreatePost = props =>{
    return(
        <form style={styles.cPostContain} onSubmit={props.addPost}>
            <div style={styles.col1}>
                <div>
                    <input type={'text'} style={styles.input} placeholder={`Give em' the headline!`}
                    name={'inputName'} value={props.inputName} onChange={props.changedI}/>
                    <textarea style={styles.textarea} placeholder={`Speak your truth...`} name={'tArea'}
                    value={props.tArea} onChange={props.changedT}/>
                </div>
                <div style={styles.avaBtn}>
                    <AvatarSq sourceInfo={profPic} altInfo={'profile picture'}/>
                    <RectBtn btnInfo={'POST'}  />
                </div>
            </div>
            <div style={styles.col2}>
                <SqreBtn btnInfo={`Photo`} btnImg={<HiOutlinePhotograph style={styles.iconStyles}/>} sqStyle={styles.createBtn}/>
                <SqreBtn btnInfo={'Video'} btnImg={<HiOutlineVideoCamera style={styles.iconStyles}/>} sqStyle={styles.createBtn}/>
                <SqreBtn btnInfo={'Location'} btnImg={<HiOutlineLocationMarker style={styles.iconStyles}/>} sqStyle={styles.createBtn}/>
            </div>
        </form>
    )
}
export default CreatePost;

const styles = {
    cPostContain: {
        maxWidth: '80%',
        border: '.1rem solid',
        margin: '0 auto',
        padding: '.5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: '#F6E7CB',
        marginTop: '1rem',
        boxShadow: '0 .3rem 1rem 0 #63768D'
    },
    iconStyles: {
        width: '3rem',
        height: '3rem'
    },
    avaBtn: {
        width: '92%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    col1: {
        width: '80%',
        marginLeft: '2rem'
    },
    col2:{
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    createBtn:{
        width: '12rem',
        height: '8.8rem',
        margin: '0 auto',
        background: '#EDFFEB',
        border: '.1rem solid',
        fontFamily: `'Darker Grotesque', sans-serif`,
        fontSize: '2rem',
        fontWeight: '500',
        letterSpacing: '.1rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
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