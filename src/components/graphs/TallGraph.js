import React from "react";

const TallGraph = ({tallG}) => {
    return(
        <div key={tallG.id} style={styles.container}>
            <img src={tallG.tallImg} alt={tallG.alt} />
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