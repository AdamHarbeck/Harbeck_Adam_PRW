import React from "react";
import Header from "../components/Header";
import {MdPieChart} from "react-icons/all";

const Chart = () => {
    return(
        <div>
            <Header pageIcon={<MdPieChart style={styles.icon}/>} pageTitle={'Chart'} />
        </div>
    )
}
export default Chart;

const styles = {
    icon: {
        width: '5rem',
        height: '5rem',
        color: '#544E61'
    }
}