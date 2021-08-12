import React from "react";
import CircleButton from "./button/CircleButton";
import { HiOutlinePhotograph } from "react-icons/hi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import AvatarLG from "./avatar/AvatarLG";
import profilePic from '../images/profile.jpg'
import TitleInput from "./input/TitleInput";
import Textarea from "./input/Textarea";
import RectBtn from "./button/RectBtn";

// In this div there will be the input, textarea, 3 small round buttons, the avatar, and the post button
const CreatePost = () =>{
    return(
        <div style={styles.cPostContain}>
            <div style={styles.columnOne}>
                <TitleInput inputType={'text'} pHolder={`Give it a title!`}/>
                <Textarea pHolder={'Let it out!'}/>
            </div>
            <div style={styles.columnTwo}>
                <CircleButton cBtnIcon={<HiOutlinePhotograph style={styles.iconStyles}/>}/>
                <CircleButton cBtnIcon={<HiOutlineVideoCamera style={styles.iconStyles}/>}/>
                <CircleButton cBtnIcon={<HiOutlineLocationMarker style={styles.iconStyles}/>}/>
            </div>
            <div style={styles.columnThree}>
                <AvatarLG sourceInfo={profilePic} altInfo={'profile picture'}/>
                <RectBtn btnInfo={'POST'} />
            </div>
        </div>
    )
}
export default CreatePost;

const styles = {
    cPostContain: {
        width: '90%',
        margin: '0 auto',
        height: '30rem',
        border: '.1rem solid',
        borderRadius: '.5rem',
        marginBottom: '2rem',
        background: '#EDDEA4',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    columnOne:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    columnTwo:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    columnThree:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    iconStyles: {
        width: '3rem',
        height: '3rem'
    }
}