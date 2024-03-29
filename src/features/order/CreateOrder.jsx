// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import store from "../../store.js"
import { useState } from "react";
import { fetchAddress } from "../user/userSlice.js";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart =  useSelector(getCart); 
  const {username, status: addressStatus, position, address} = useSelector(e=> e.user);
  const isLoadingAddress = addressStatus  === 'loading';
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-8">Ready to order? Let&apos;s go!</h2>
    
      <Form method="POST">
        <div className="sm:flex items-center mb-5 ">
          <label className="basis-40">First Name</label>
          <input className="input" type="text" name="customer" required defaultValue={username}/>
        </div>

        <div className="sm:flex items-center mb-5 ">
          <label className="basis-40">Phone number</label>
          <div className="grow w-full">
            <input className="input" type="tel" name="phone" required />
          {formErrors?.phone && <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">{formErrors.phone}</p>}
          </div>

        </div>

        <div className="sm:flex items-center mb-5 ">
          <label className="basis-40 ">Address</label>
          <div className="grow w-full">
            <input defaultValue={address} className="input mb-2" disabled={isLoadingAddress} type="text" name="address" required />
     {  !position.latitude && !position.longitude && <Button type="small" onClick={(e)=> {
              e.preventDefault();     
              dispatch(fetchAddress())}
              
            }
            disabled={isLoadingAddress || isLoadingAddress}
            >Get position
            </Button>}
          </div>

        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="focus:ring-off h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>
  
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing Order..." : `Order Now from  €${totalPrice}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const cartData = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(cartData.phone))
    errors.phone = "Please give us your phone number";

  if (Object.keys(errors).length > 0) return errors;

  // If everthing is ok create  new order and redirect
  const newOrder = await createOrder(cartData);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
