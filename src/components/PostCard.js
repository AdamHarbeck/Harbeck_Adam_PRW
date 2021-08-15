import React from "react";
import AvatarSq from "./avatar/AvatarSq";
import CircleButton from "./button/CircleButton";
import {HiOutlineAnnotation, HiOutlineThumbUp, HiOutlineXCircle, HiOutlineShare} from "react-icons/all";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import SqreBtn from "./button/SqreBtn";


// This will contain the Avatar, username, delete, title, description, like, shara, and comment buttons.
const PostCard = props =>{
    return(
        <div style={styles.pCard} key={props.id}>
            <div style={styles.col1}>
                <div style={styles.topContain}>
                    <div style={styles.row1}>
                        <AvatarSq sourceInfo={props.val.pPic} altInfo={'profile picture'}/>
                        <Heading headingContent={props.val.pName}  headStyle={styles.headStyle}/>
                    </div>
                    <CircleButton cBtnIcon={<HiOutlineXCircle style={styles.iconStyle} onClick={props.delMe}/>}/>
                </div>
                <div>
                    <Paragraph paraInfo={props.val.pTitle}/>
                    <div style={styles.textStyle}> {props.val.pDesc} </div>
                </div>
            </div>
            <div style={styles.col2}>
                <SqreBtn btnImg={<HiOutlineThumbUp style={styles.iconStyle}/>} btnInfo={'Like'} sqStyle={styles.button}/>
                <SqreBtn btnImg={<HiOutlineAnnotation style={styles.iconStyle}/>} btnInfo={'Comment'} sqStyle={styles.button}/>
                <SqreBtn btnImg={<HiOutlineShare style={styles.iconStyle}/>} btnInfo={'Share'} sqStyle={styles.button}/>
            </div>

        </div>
    )
}
export default PostCard;

const styles = {
    pCard: {
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
    iconStyle: {
        width: '3rem',
        height: '3rem',
    },
    topContain: {
        width: '',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headStyle: {
        fontSize: '2.2rem',
        letterSpacing: '.1rem',
        fontWeight: '500',
        alignSelf: 'center',
        marginLeft: '1rem'
    },
    col1: {
        width: '80%'
    },
    col2: {
        width: '20%'
    },
    row1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button:{
        width: '12rem',
        height: '16.7rem',
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
    imgContainer: {
        width: '64rem',
        height: '36rem',
        objectFit: 'cover'
    },
    textStyle: {
        fontSize: '2.4rem',
        letterSpacing: '.1rem'
    }
}