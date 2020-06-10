import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
]

class BuildControls extends Component{

    render(){
        return(
            <div className={classes.BuildControls}>
                <p>Current price: <strong>£{this.props.price.toFixed(2)}</strong> </p>
                 {controls.map(ctrl =>(
                     <BuildControl 
                     key={ctrl.label} 
                     label={ctrl.label} 
                     more={() => this.props.addHandler(ctrl.type)}
                     less={() => this.props.removeHandler(ctrl.type)}
                     disabled={this.props.disabled[ctrl.type]} />
                 ))}
                <button 
                    className={classes.OrderButton}
                    disabled={!this.props.purchasable}
                    onClick={this.props.ordered}>Order now</button>
            </div>
            )
    }   
}

BuildControls.propTypes ={
    price: PropTypes.number.isRequired,
    addHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
    disabled: PropTypes.object,
    purchasable: PropTypes.bool,
    ordered: PropTypes.func,
}

export default BuildControls;