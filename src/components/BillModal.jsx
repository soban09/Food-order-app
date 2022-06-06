import React, { useContext } from 'react'
import CartFood from './CartFood';
import AuthContext from './context/auth-context';


const BillModal = () => {
  const ctx = useContext(AuthContext);

  const deactivateModal = (event) => {
    event.preventDefault();
    ctx.activateModal(false);
  }

  const order = (event) => {
    event.preventDefault();
    console.log('Ordering...');
  }

  return (
    <>
      <div onClick={deactivateModal} className='backDrop' />
      <div className='Menu CartModal'>
        <ul>
          <div className='menuList'>
            {ctx.dishes.map((dish) => {
              if (dish.quantity > 0) {
                return (
                  <CartFood
                    key={dish.id}
                    index={dish.id}
                    foodName={dish.dishName}
                    foodPrice={dish.price}
                    quantity={dish.quantity}
                  />
                )
              }
            })}
          </div>
          <li className='foodList'>
            <div className="food_desc">
              <h3><strong>Total Amount</strong></h3>
            </div>
            <div>
              <form>
                <h3 className='totalAmt'><strong>${(ctx.Bill).toFixed(2)}</strong></h3>
                <button onClick={deactivateModal} className='addBtn'>Cancel</button>
                <button onClick={order} className='addBtn'>Order</button>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default BillModal