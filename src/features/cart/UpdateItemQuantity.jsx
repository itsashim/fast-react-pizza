import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItem, increaseItem } from "./cartSlice";
import PropTypes from "prop-types";

function UpdateItemQuantity({pizzaId}) {
    const dispatch = useDispatch();
    return (
        <div>
            <Button type="circle" onClick={()=> dispatch(increaseItem(pizzaId))}>+</Button>
            <Button type="circle" onClick={()=> dispatch(decreaseItem(pizzaId))}>-</Button>
        </div>
    )
}

UpdateItemQuantity.propTypes = {
    pizzaId: PropTypes.any
}

export default UpdateItemQuantity
