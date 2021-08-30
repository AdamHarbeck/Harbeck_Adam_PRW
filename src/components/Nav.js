import React from "react";
import {NavLink} from "react-router-dom";
import {IoMdDocument, IoPersonCircle, MdDashboard, MdEmail, MdPieChart, MdSettings} from "react-icons/all";
import Logo from "../components/Logo";
import LogoImg from '../images/Asset 1.png';

const Nav = () => {
    return(
        <div style={styles.container}>
            <Logo logo={LogoImg}/>
            <NavLink to={'/Dashboard'} style={styles.link}><MdDashboard style={styles.icon}/> Dashboard</NavLink>
            <NavLink to={'/Chart'} style={styles.link}><MdPieChart style={styles.icon}/> Chart</NavLink>
            <NavLink to={'/Form'} style={styles.link}><IoMdDocument style={styles.icon}/> Form</NavLink>
            <NavLink to={'/Email'} style={styles.link}><MdEmail style={styles.icon}/> Email</NavLink>
            <NavLink to={'/Profile'} style={styles.link}><IoPersonCircle style={styles.icon}/> Profile</NavLink>
            <NavLink to={'/Settings'} style={styles.link}><MdSettings style={styles.icon}/> Settings</NavLink>
            <NavLink to={'/Dashboard'} style={styles.link}>Sign Out</NavLink>
        </div>
    )
}
export default Nav;

const styles = {
    icon: {
        width: '2.4rem',
        height: '2.4rem'
    },
    link:{
        display: 'flex',
        textDecoration: 'none',
        color: '#FCECC9',
        fontWeight: '500',
        fontSize: '2.4rem',
        padding: '.5rem',
        margin: '0 0 1rem 1rem',
        alignItems: 'center'
    },
    container: {
        width: '28rem',
        height: '130rem',
        background: '#544E61'
    }
}
