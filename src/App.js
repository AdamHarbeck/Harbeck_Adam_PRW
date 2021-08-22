import React from "react";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Nav from "./components/Nav";
import Routes from "./components/Routes";

const styles ={
    layout: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    navLayout:{
        width: '340rem',
        height: '123rem',
        background: '#544E61'
    }
}

function App() {
    return (
    <div className="App">
        <Router>
            <div style={styles.layout}>
                <Nav style={styles.navLayout}/>
                <Routes />
            </div>

        </Router>
    </div>
  );
}

export default App;