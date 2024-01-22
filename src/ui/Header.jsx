import { Link } from "react-router-dom";
import OrderSearch from "../features/order/OrderSearch";

function Header() {
  return (
    <header>
      <OrderSearch />
      <Link to="/">React pizza co.</Link>
    </header>
  );
}

export default Header;
