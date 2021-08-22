import React from "react";

const TallGraph = ({tallImg}) => {
    return(
        <div style={styles.container}>
            <img src={tallImg} alt={'Tall graph'} />
        </div>
    )
}
export default TallGraph;

const styles={
    container:{
        width: '35rem',
        height: '122rem',
        boxShadow: '0 0 .6rem .4rem #bba0b2'
    }
}