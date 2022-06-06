import React, { useState, useEffect, useContext } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import AuthContext from './context/auth-context';

const Header = () => {
  const ctx = useContext(AuthContext);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if(ctx.total === 0) return;

    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 300) 
  }, [ctx.total])

  const activateModal = () => {
    if(ctx.total <= 0) return;
    ctx.activateModal(true);
  }

  const className = `cart ${animate ? 'popupClass' : ''}`
  return (
    <div className='header'>
      <h2 className='heading'>ReactMeals</h2>

      <div onClick={activateModal} className={className}>
        <BsFillCartFill className='icon'/>
        <p>Your Cart</p>
        <div className='order-no'>
          <span>{ctx.total}</span>
        </div>
      </div>
    </div>
  )
}

export default Header