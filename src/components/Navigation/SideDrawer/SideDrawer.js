import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux'

const sideDrawer = (props) =>{
    
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.visible){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <BackDrop show={props.visible} hide={props.close} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo} onClick={props.open}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;