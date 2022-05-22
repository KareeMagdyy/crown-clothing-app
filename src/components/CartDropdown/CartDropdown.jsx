import Button from "../Button/Button";
import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button children='Checkout' />
    </div>
  );
};

export default CartDropdown;
