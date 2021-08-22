import React from "react";

const MediumGraph = ({mdImg}) => {
    return(
        <div style={styles.container}>
            <img src={mdImg} alt={'Medium graph'} />
        </div>
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