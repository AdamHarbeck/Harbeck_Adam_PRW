import React from "react";

const LongGraph = ({longG}) => {
    return(
        <div key={longG.id} style={styles.container}>
            <img src={longG.longImg} alt={longG.alt}/>
        </div>
    )
}
export default LongGraph;

const styles={
    container:{
        width: '100rem',
        height: '30rem',
        boxShadow: '0 0 .6rem .4rem #bba0b2'
    }
}