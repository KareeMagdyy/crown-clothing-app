import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const cartToggleHandler = () => {
    setIsCartOpen((prevState) => !prevState);
  };
  return (
    <div className='cart-icon-container' onClick={cartToggleHandler}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>10</span>
    </div>
  );
};

export default CartIcon;
