import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(navigate);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true;
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex items-center justify-between px-3 max-w-6xl mx-auto ">
        <div>
          <img
            className="h-5 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Realtor.com_logo.png/800px-Realtor.com_logo.png"
            alt="Realtor Logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex  items-center space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500 "
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500 "
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500 "
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Signin
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
