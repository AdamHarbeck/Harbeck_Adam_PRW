import React from "react";

const MediumGraph = ({mediumG}) => {
    return(
        <article key={mediumG.id} style={styles.container}>
            <img src={mediumG.mdImg} alt={mediumG.alt} />
        </article>
    )
}
export default MediumGraph;

const styles={
    container:{
        width: '48rem',
        height: '60rem',
        boxShadow: '0 0 .6rem .4rem #bba0b2'
    }
}