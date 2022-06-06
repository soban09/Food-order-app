import React, { useState, useContext } from 'react'
import AuthContext from './context/auth-context';

const CartFood = (props) => {
    const ctx = useContext(AuthContext);
    const [quantity, setQuantity] = useState(props.quantity);

    const incQtyHandler = () => {
        var newVal = quantity;
        newVal++;
        setQuantity(newVal);
        ctx.updateDishes(props.index, newVal);
    }

    const decQtyHandler = () => {
        var newVal = quantity;
        newVal--;
        if(newVal<=0){
            setQuantity(0);
            ctx.updateDishes(props.index, 0);
            return;
        }
        setQuantity(newVal);
        ctx.updateDishes(props.index, newVal);
    }

    return (
        <>
            <li className='foodList cartList'>
                <div className="food_desc">
                    <h3><strong>{props.foodName}</strong></h3>
                    <p className='price'>${(props.foodPrice*quantity).toFixed(2)}</p>
                    <span>{quantity}</span>
                </div>
                <div className="food_add">
                    <button onClick={decQtyHandler}>-</button>
                    <button onClick={incQtyHandler}>+</button>
                </div>
            </li>
            <hr className='cartHR'></hr>
        </>
    )
}

export default CartFood