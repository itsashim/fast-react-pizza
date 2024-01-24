import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-300">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <Link to="/menu">Menu</Link>
    </div>
  );
}

export default Home;
