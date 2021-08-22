import React, {useState} from "react";
import SquareGraph from "../components/graphs/SquareGraph";
import MediumGraph from "../components/graphs/MediumGraph";
import LongGraph from "../components/graphs/LongGraph";
import TallGraph from "../components/graphs/TallGraph";
import Header from "../components/Header";
import {MdDashboard} from "react-icons/all";
import Sales from '../images/Sales Growth.png';
import Turnover from '../images/Employee Turnover.png';
import Temperature from '../images/Temperature.png';
import Productivity from '../images/Productivity.png';
import Stock from '../images/Stock Price.png';
import Inventory from '../images/Inventory Costs.png';
import ItemLoss from '../images/Item Loss.png';

function Dashboard() {
    const [longG] = useState(
        [
            {gLong: Sales}
        ]
    );
    const [squareG] = useState([
        {gSquare: Turnover},
        {gSquare: Productivity},
        {gSquare: Temperature}
    ]);
    const [mediumG] = useState([
        {gMedium: Stock},
        {gMedium: Inventory}
    ]);
    const [tallG] = useState([
        {gTall: ItemLoss}
    ]);

    return(
        <div>
            <Header pageIcon={<MdDashboard style={styles.icon}/>} pageTitle={'Dashboard'}/>
            <div style={styles.container}>
                <div style={styles.container1}>
                    <LongGraph longImg={Sales}/>

                    <div style={styles.rows}>
                        <SquareGraph sqImg={Turnover} />
                        <SquareGraph sqImg={Productivity} />
                        <SquareGraph sqImg={Temperature} />
                        {/*{squareG.map((squareG, index) => (*/}
                        {/*    <SquareGraph key={index} squareG={squareG} />*/}
                        {/*))}*/}
                        {/*When I try to use the map, it says that my values are undefined.*/}
                    </div>
                    <div style={styles.mdRow}>
                        <MediumGraph mdImg={Stock} />
                        <MediumGraph mdImg={Inventory} />
                    </div>
                </div>
                <div style={styles.container2}>
                    <TallGraph tallImg={ItemLoss} />
                </div>
            </div>
        </div>
    )
}
export default Dashboard;

const styles = {
    container1: {
        width: '100rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '1rem 0 0 1.5rem'
    },
    container2: {
        width: '35rem',
        margin: '1rem 0 0 1.5rem'
    },
    rows: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    mdRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    container: {
        display: 'flex'
    },
    icon: {
        width: '5rem',
        height: '5rem',
        color: '#544E61'
    }
}