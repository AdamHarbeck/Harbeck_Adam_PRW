import React from "react";
import AdCard from "./AdCard";
import Ad1 from "../images/ad1.jpeg";
import Ad2 from "../images/ad2.jpeg";

// This will contain 2 AdCards
const RightNav = () => {
    return(
        <div style={styles.rNavContain}>
            <AdCard imgSrc={Ad1} imgAlt={'profile pic'}/>
            <AdCard imgSrc={Ad2} imgAlt={'profile pic'}/>
        </div>
    )
}
export default RightNav;

const styles ={
    rNavContain: {
        width: 'calc(100%/5 - 5rem)',
        height: '71rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
}