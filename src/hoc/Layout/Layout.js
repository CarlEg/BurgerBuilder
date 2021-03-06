import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDraw: false,
    }
    
    sideDrawCloseHandler = () =>{
        this.setState({
            showSideDraw: false,
        })
    }

    sideDrawToggleHandler = () =>{
        this.setState((prevState) =>{
            return({showSideDraw: !prevState.showSideDraw})
        });
    }

    render(){
        return(
            <Aux>
                <Toolbar openSideDraw={this.sideDrawToggleHandler}/>
                <SideDrawer 
                close={this.sideDrawCloseHandler}
                visible={this.state.showSideDraw} 
                open={this.sideDrawToggleHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
    
}

export default Layout;