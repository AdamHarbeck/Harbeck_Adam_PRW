import React from "react";

const LongGraph = ({longImg}) => {
    return(
        <div  style={styles.container}>
            <img src={longImg} alt={'Long graph'}/>
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