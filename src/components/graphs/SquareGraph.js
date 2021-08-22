import React from "react";

const SquareGraph = ({sqImg}) => {
    return(
        <div style={styles.container}>
            <img src={sqImg} alt={'Square graph'}/>
        </div>
    )
}
export default SquareGraph;

const styles={
    container :{
        width: '30rem',
        height: '30rem',
        boxShadow: '0 0 .6rem .4rem #bba0b2'
    }
}