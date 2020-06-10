import React from 'react';

import classes from './SideDrawerButton.module.css';


const sideDrawerButton = (props) => {
    return(
        <div className={classes.DrawerToggle}
            onClick={props.open} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default sideDrawerButton