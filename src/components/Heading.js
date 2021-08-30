import React from "react";

const Heading = (props) => {
    return(
        <div>
            <h2 style={styles.heading}>{props.heading}</h2>
        </div>
    )
}
export default Heading;

const styles = {
    heading: {
        fontSize: '2.2rem',
        fontWeight: '500',
        letterSpacing: '.1rem',
        marginLeft: '30rem'
    }
}