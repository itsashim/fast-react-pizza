import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";


function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
          <UpdateItemQuantity pizzaId={pizzaId} quantity={quantity}></UpdateItemQuantity>
          <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}


CartItem.propTypes = {
  item: PropTypes.object
}

export default CartItem;
