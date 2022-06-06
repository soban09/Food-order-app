import React, { useContext } from 'react'
import AuthContext from './context/auth-context';

import Food from './Food'

const Menu = (props) => {

  const ctx = useContext(AuthContext);

  return (
    <>
      <div className='Menu'>
        <ul>
          {ctx.dishes.map((dish) => {
            return (
              <Food
                key={dish.id}
                index={dish.id}
                foodName={dish.dishName}
                foodDetails={dish.dishDetails}
                foodPrice={dish.price}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Menu