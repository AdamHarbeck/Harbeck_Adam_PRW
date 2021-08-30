import React from "react";

const SquareGraph = ({squareG}) => {
    return(
        <article key={squareG.id} style={styles.container}>
            <img src={squareG.sqImg} alt={squareG.alt}/>
        </article>
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