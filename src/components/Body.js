import React from "react";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";

// This will contain the CreatePost and PostCard containers.
const Body = props =>{
    return(
        <div style={styles.contentContain}>
            <CreatePost />
            <PostCard  pic={props.val.pPic} username={props.val.pName} title={props.val.pTitle} desc={<img src={props.val.pDesc} alt={props.val.pAlt} style={styles.imgContainer}/>} />
        </div>
    )
}
export default Body;

const styles ={
    contentContain: {
        width: 'calc(100%/5 * 3 + 10rem)',
        border: '.1rem solid',
        margin: '0 auto',
        borderTop: 'none',
    },
    imgContainer: {
        width: '64rem',
        height: '36rem',
        objectFit: 'cover'
    }
}