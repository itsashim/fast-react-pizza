import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItem, increaseItem } from "./cartSlice";
import PropTypes from "prop-types";

function UpdateItemQuantity({pizzaId, quantity}) {
    const dispatch = useDispatch();
    return (
        <div className="flex gap-3 items-center">
            <Button type="circle" onClick={()=> dispatch(increaseItem(pizzaId))}>+</Button>
            <h1>{quantity}</h1>
            <Button type="circle" onClick={()=> dispatch(decreaseItem(pizzaId))}>-</Button>
        </div>
    )
}

UpdateItemQuantity.propTypes = {
    pizzaId: PropTypes.any,
    quantity: PropTypes.any
}

export default UpdateItemQuantity
