import React from "react";
import CircleButton from "./button/CircleButton";
import AvatarLG from "./avatar/AvatarLG";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import { BsXCircle } from "react-icons/bs";
import { BsChatSquare } from "react-icons/bs";
import { BsGem } from "react-icons/bs";
import { RiShareForward2Fill } from "react-icons/ri";

// This will contain the Avatar, username, delete, title, description, like, shara, and comment buttons.
const PostCard = props =>{
    return(
        <div style={styles.pCard}>
            <div style={styles.avaName}>
                <AvatarLG sourceInfo={props.avatar} altInfo={'avatar photo'}/>
                <Heading headingContent={<h2>{props.username}</h2>} headStyle={styles.nameStyle}/>
            </div>
            <CircleButton cBtnIcon={<BsXCircle style={styles.iconStyle}/>}/>
            <Heading headingContent={<h1 >{props.title}</h1>} headStyle={styles.titleStyle}/>
            <Paragraph paraInfo={props.description}/>
            <CircleButton cBtnIcon={<BsGem style={styles.iconStyle} />}/>
            <CircleButton cBtnIcon={<BsChatSquare style={styles.iconStyle} />}/>
            <CircleButton cBtnIcon={<RiShareForward2Fill style={styles.iconStyle} />}/>
        </div>
    )
}
export default PostCard;

const styles = {
    pCard: {
        width: 'calc(100% / 2 - 1rem)',
        border: '.1rem solid',
        height: '40rem',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        background: '#EDDEA4'
    },
    iconStyle: {
        width: '3rem',
        height: '3rem'
    },
    titleStyle:{
        width: '98%',
        height: '4rem',
        border: '.1rem solid',
        margin: '0 auto',
        borderRadius: '.5rem',
        background: '#DFEEF6',
        textAlign: 'center'
    },
    nameStyle: {
        alignSelf: 'center',
        fontSize: '1.2rem',
    },
    avaName: {
        display: 'flex',
        flexDirection: 'row',
    }
}