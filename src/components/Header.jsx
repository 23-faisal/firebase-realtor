import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const pathMatch = (route) => {
    if (route === location.pathname) return true;
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50 ">
      <header className="flex items-center justify-between px-3 max-w-6xl mx-auto">
        <div onClick={() => navigate("/")}>
          <img
            className="h-6 cursor-pointer "
            src="https://cdn.worldvectorlogo.com/logos/realtor-3.svg"
            alt="realtor logo"
          />
        </div>
        <div>
          <ul className="flex items-center space-x-3 md:space-x-10">
            <li
              className={`py-3 text-sm font-semibold  border-b-[3px] transition duration-200 ease-in-out ${
                pathMatch("/")
                  ? "text-black border-b-red-500 "
                  : "border-b-transparent text-gray-400"
              }`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`py-3 text-sm font-semibold  border-b-[3px] transition duration-200 ease-in-out ${
                pathMatch("/offers")
                  ? "text-black border-b-red-500 "
                  : "border-b-transparent text-gray-400"
              }`}
            >
              <Link to={"/offers"}>Offers</Link>
            </li>
            <li
              className={`py-3 text-sm font-semibold border-b-[3px] transition duration-200 ease-in-out ${
                pathMatch("/sign-in") || pathMatch("/profile")
                  ? "text-black border-b-red-500 "
                  : "border-transparent text-gray-400"
              }`}
            >
              <Link to={"/profile"}>{pageState}</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
