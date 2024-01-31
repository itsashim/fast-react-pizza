import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart"


function Cart() {
  const cart = useSelector((item)=> item.cart.cart);
  const username = useSelector(e=> e.user.username);
  const dispatch = useDispatch();
  function handleClear(){
    dispatch(clearCart(cart));
  }


  if(!cart.length)
    return <EmptyCart></EmptyCart>

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

       <ul className=" my-3 divide-stone-200 border-b divide-y">
        {cart.map((item)=> 
        <CartItem item={item} key={item.pizzaId}></CartItem>
        )
        }
       </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order Pizza
        </Button>
 
        <Button type="secondary" onClick={handleClear}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
