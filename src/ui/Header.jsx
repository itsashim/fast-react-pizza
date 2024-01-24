import { Link } from "react-router-dom";
import OrderSearch from "../features/order/OrderSearch";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 ">
      <Link to="/" className="tracking-widest">Fast React pizza co.</Link>
      <OrderSearch />
      <Username/>
    </header>
  );
}

export default Header;
