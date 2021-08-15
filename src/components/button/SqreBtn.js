import React from "react";

// Props for an icon for the circle button
const SqreBtn = props =>{
    return(
        <button style={props.sqStyle}>
            {props.btnImg}{props.btnInfo}
        </button>
    )
}
export default SqreBtn;

// const styles = {
//     container: {
//         width: '12rem',
//         height: '8.8rem',
//         margin: '0 auto',
//         background: '#EDFFEB',
//         border: '.1rem solid',
//         fontFamily: `'Darker Grotesque', sans-serif`,
//         fontSize: '2rem',
//         fontWeight: '500',
//         letterSpacing: '.1rem',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-around'
//     }
// }