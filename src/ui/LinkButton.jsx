import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  if (to === -1) {
    return (
      <Link
        onClick={() => navigate(-1)}
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      to={to}
    >
      {children}
    </Link>
  );
}
LinkButton.propTypes = {
  children: PropTypes.any,
  to: PropTypes.any,
};

export default LinkButton;
