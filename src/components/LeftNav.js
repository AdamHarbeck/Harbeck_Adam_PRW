import React from "react";
import LNavBtn from "./button/LNavBtn";

// This will contain 3 buttons
const LeftNav = () => {
    return(
        <div style={styles.lNavContain}>
            <LNavBtn btnName={'Newsfeed'}/>
            <LNavBtn btnName={'Messages'}/>
            <LNavBtn btnName={'Watch'}/>
        </div>
    )
}
export default LeftNav;

const styles ={
    lNavContain: {
        width: 'calc(100%/6)',
        height: '75rem',
        background: '#D9E5D6'
    }
}