import React from 'react';

import classes from './Order.module.css'

const order = (props) =>{
    const ingredients = props.ingredients.map(ig=>{
        <p>{ig.ingredient} x {ig.quantity}</p>
    })
    return(
        <div className={classes.Order}>
            <p>Burger #{props.number}</p>
            {ingredients}
            <p>{props.price}</p>
        </div>
    )
}

export default order;