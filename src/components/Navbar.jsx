import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const Navbar = () => {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = (route) => {
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
  }, []);

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
              className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px]  ${
                pathMatchRoute("/")
                  ? "text-black border-b-red-500 "
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px]  ${
                pathMatchRoute("/offers")
                  ? "text-black border-b-red-500 "
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px]  ${
                pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                  ? "text-black border-b-red-500 "
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
