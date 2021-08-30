import React, { useState } from "react";
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
    const [longG] = useState([
        {
            longImg: Sales,
            alt: 'Graph showing sales figures.'
        }
    ])
    const [squareG] = useState([
        {
            sqImg: Turnover,
            alt: 'Graph showing employee turnover in percentages.',
        },
        {
            sqImg: Productivity,
            alt: 'Graph showing the percentage of productivity.',
        },
        {
            sqImg: Temperature,
            alt: 'Graph showing the temperatures.',
        }
    ]);
    const [mediumG] = useState([
        {
            mdImg: Stock,
            alt: 'stock graph'
        },
        {
            mdImg: Inventory,
            alt: 'inventory graph'
        }
    ]);
    const [tallG] = useState([
        {
            tallImg: ItemLoss,
            alt: 'Graph showing item loss.'
        }
    ]);

    return(
        <div>
            <Header pageIcon={<MdDashboard style={styles.icon}/>} pageTitle={'Dashboard'}/>
            <section style={styles.container}>
                <div style={styles.container1}>
                    <div>
                        {longG.map((longG, id) => (
                            <LongGraph key={id} longG={longG} />
                        ))}
                    </div>
                    <div style={styles.rows}>
                        {squareG.map((squareG, id) => (
                            <SquareGraph key={id} squareG={squareG} />
                        ))}
                    </div>
                    <div style={styles.mdRow}>
                        {mediumG.map((mediumG, id) => (
                            <MediumGraph key={id} mediumG={mediumG} />
                        ))}
                    </div>
                </div>
                <div style={styles.container2}>
                    {tallG.map((tallG, id) => (
                        <TallGraph key={id} tallG={tallG} />
                    ))}
                </div>
            </section>
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