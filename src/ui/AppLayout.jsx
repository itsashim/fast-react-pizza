import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import MenuLoader from "./MenuLoader";

function AppLayout() {
  const isLoading = useNavigation();
  const useLoader = isLoading.state === "loading";

  return (
    <div className="layout">
      {useLoader && <MenuLoader />}
      <Header />
      <Outlet />
      <CartOverview />
    </div>
  );
}

export default AppLayout;
