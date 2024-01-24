import { Link } from "react-router-dom";
import OrderSearch from "../features/order/OrderSearch";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React pizza co.
      </Link>
      <OrderSearch />
      <Username />
    </header>
  );
}

export default Header;
