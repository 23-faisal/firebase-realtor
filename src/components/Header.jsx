import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathMatch = (route) => {
    if (route === location.pathname) return true;
  };
  console.log(location);
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50 ">
      <header className="flex items-center justify-between px-3 max-w-6xl mx-auto">
        <div className="cursor-pointer " onClick={() => navigate("/")}>
          <img
            className="h-6 cursor-pointer "
            src="https://cdn.worldvectorlogo.com/logos/realtor-3.svg"
            alt="realtor logo"
          />
        </div>
        <div>
          <ul className="flex items-center space-x-4 md:space-x-10">
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent transition duration-200 ease-in-out ${
                pathMatch("/") && "text-black border-b-red-500 "
              }`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent transition duration-200 ease-in-out ${
                pathMatch("/offers") && "text-black border-b-red-500 "
              }`}
            >
              <Link to={"/offers"}>Offers</Link>
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent transition duration-200 ease-in-out ${
                pathMatch("/sign-in") && "text-black border-b-red-500 "
              }`}
            >
              <Link to={"/sign-in"}>Sign in</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
