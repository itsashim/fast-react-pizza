import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
        setQuery("");
      }}
    >
      <input
        placeholder="Search Pizza"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default OrderSearch;
