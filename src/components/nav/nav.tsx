import { Link } from "react-router-dom";

const Nav = (): JSX.Element => {
  return (
    <div>
      <div>
        <h1 className="text-center text-6xl">
          <Link to="/" className="text-blue-500">
            Marvel Application!
          </Link>
        </h1>
      </div>
      <div className="flex justify-center items-center space-x-6 pt-2 pb-2">
        <div>
          <Link to="/" className="text-black-500 text-2xl hover:underline">
            Home
          </Link>
        </div>
        <div>
          <Link to="/about" className="text-black-500 text-2xl hover:underline">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
