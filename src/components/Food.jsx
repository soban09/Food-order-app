import React, { useState, useContext } from 'react'
import AuthContext from './context/auth-context';

const Food = (props) => {
    const ctx = useContext(AuthContext);
    const [quantity, setQuantity] = useState(props.quantity);

    const incQtyHandler = (event) => {
        setQuantity(event.target.value);
    }

    const increase = (event) => {
        event.preventDefault();
        ctx.updateDishes(props.index, quantity);
    }

    return (
        <>
            <li className='foodList'>
                <div className="food_desc">
                    <h3><strong>{props.foodName}</strong></h3>
                    <p><em>{props.foodDetails}</em></p>
                    <p className='price'>${props.foodPrice}</p>
                </div>
                <div className="food_add">
                    <form>
                        <label htmlFor="quantity">Amount</label>
                        <input onChange={incQtyHandler} id='quantity' value={quantity} type="number" min="0" max="999"></input>
                        <br></br>
                        <button onClick={increase} type='submit' className='addBtn'>+Add</button>
                    </form>
                </div>
            </li>
            <hr></hr>
        </>
    )
}

export default Food