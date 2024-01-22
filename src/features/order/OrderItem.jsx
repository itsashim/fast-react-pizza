import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.any,
  isLoadingIngredients: PropTypes.any,
  ingredients: PropTypes.any,
};

export default OrderItem;
