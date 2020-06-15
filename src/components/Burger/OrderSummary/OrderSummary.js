import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    componentDidUpdate(){
        console.log('componentWillUpdate[OrderSummary]')
    }

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey =>{
            return( 
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>)
        })

        return(
            <Aux>
                <h3>Your Order </h3>
                <p>A delicous burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <h4>Price: £{this.props.price.toFixed(2)}</h4>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.continue}>ORDER</Button>
            </Aux>
        )
    }
    
}

export default OrderSummary;