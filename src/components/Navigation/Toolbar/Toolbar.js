import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerButton from '../SideDrawer/SideDrawerButton/SideDrawerButton';

const toolbar = (props) =>{
    return(
        <header className={classes.Toolbar}>
            <div className={classes.Menu}>
                <SideDrawerButton open={props.openSideDraw} />
            </div>
            
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
};

export default toolbar;