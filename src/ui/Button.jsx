import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "focus:rign inline-block rounded-full bg-yellow-400 px-4 py-3  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";
  if (to) {
    return (
      <Link className={className} to={to}>
        Order pizzas
      </Link>
    );
  }
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.any,
  to: PropTypes.any,
};

export default Button;
