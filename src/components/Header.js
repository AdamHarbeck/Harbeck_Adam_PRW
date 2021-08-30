import React from "react";

const Header = (props) => {
    return(
        <header style={styles.container}>
            <div style={styles.heading}>
                <div>
                    {props.pageIcon}
                </div>
                <h1>{props.pageTitle}</h1>
            </div>
            <input type={'search'} placeholder={'Search'} style={styles.input}/>
        </header>
    )
}
export default Header;

const styles = {
    heading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: '1.6rem',
        alignItems: 'center'
    },
    container: {
        width: '130rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '30rem',
        height: '4rem',
        alignSelf: 'center',
        background: '#fcecc9',
        border: '.1rem solid #bba0b2'
    }
}