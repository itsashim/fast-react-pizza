import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector((state) => 
    state.cart.cart.reduce((sum, item)=> sum + item.quantity, 0)  
);
  
  const totalPrice = useSelector((state)=> state.cart.cart.reduce((sum, item)=>  sum + item.unitPrice,0 ))

  if(!totalCartQuantity)
    return;

  return (
    <div className="flex items-center justify-between bg-stone-800  px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart" className="text-stone-300">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
