import React from "react";
import LeftNav from "./LeftNav";
import Body from "./Body";
import RightNav from "./RightNav";
//If props are not used pass through an empty param.
const Content = () =>{
    return(
        <div style={styles.container}>
            <LeftNav />
            <Body />
            <RightNav />
        </div>
    )
}
export default Content;

const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}