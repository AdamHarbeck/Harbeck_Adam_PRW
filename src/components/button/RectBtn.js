import React from "react";
import '../../App.css'


// Props for an icon for the circle button
const RectBtn = props =>{
    return(
        <button style={styles.container} id={'rectBtn'}>
            {props.btnInfo}
        </button>
    )
}
export default RectBtn;

const styles = {
    container: {
        height: '5rem',
        width: '10rem',
        border: '.1rem solid',
        borderRadius: '.5rem',
        background: '#63768D',
        color: '#DAFFD6',
        fontFamily: `'Darker Grotesque', sans-serif`,
        fontWeight: '500',
        letterSpacing: '.1rem',
        fontSize: '1.8rem'
    }
}