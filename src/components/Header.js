import React from "react";
import Logo from "./Logo";
import Input from "./input/Input";
import AvatarLG from "./avatar/AvatarLG";
import profilePic from '../images/profile.jpg'
import CircleButton from "./button/CircleButton";
import {BsGearFill} from "react-icons/all";
import logo from '../images/ltLogo.png';

// In the header there will be the Logo, search bar with icon, avatar, and settings button.
const Header = () =>{
    return(
        <header style={styles.headContain}>
            <div style={styles.innerContain}>
                <Logo logoSrc={logo}/>
                <Input inputType={'search'} pHolder={'Search'}/>
            </div>
            <div style={styles.innerContain}>
                <AvatarLG sourceInfo={profilePic} altInfo={'profile picture'} />
                <CircleButton cBtnIcon={<BsGearFill style={styles.iconStyle}/>}/>
            </div>
        </header>
    )
}
export default Header;

const styles = {
    headContain: {
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#63768D',
        padding: '1rem'
    },
    iconStyle: {
        width: '3rem',
        height: '3rem',
        color: '#DAFFD6'
    },
    innerContain:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}