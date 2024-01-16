import { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { username, email } = formData;

  const SignOut = async (e) => {
    e.preventDefault();
    try {
      signOut(auth);
      toast.warning("You've been logged out ");
      navigate("/sign-in");
    } catch (err) {
      toast.error("Something went wrong!!!");
    }
  };
  return (
    <section className="max-w-6xl mx-auto px-3">
      <h1 className="text-3xl text-center mt-6 font-bold ">Profile</h1>
      <div className="w-full md:w-[50%] mx-auto px-3 mt-6">
        <form>
          {/* Name */}
          <input
            className="w-full px-4 py-2 text-xl text-gray-700 rounded mt-6 bg-white border border-gray-300 transition ease-in-out"
            disabled
            type="text"
            id="username"
            value={username}
          />

          {/* Email input */}

          <input
            className="w-full mb-6 px-4 py-2 text-xl text-gray-700 rounded mt-6 bg-white border border-gray-300 transition ease-in-out"
            disabled
            type="email"
            id="email"
            value={email}
          />
          <div className="flex items-center justify-between  whitespace-nowrap text-lg sm:text-md">
            <p className="flex items-center mb-6 sm:mb-0 gap-2">
              Do your want to change your name?
              <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 cursor-pointer  ">
                Edit
              </span>
            </p>
            <p
              onClick={SignOut}
              className="text-blue-600 hover:text-blue-700 transition ease-in-out duration-200 cursor-pointer "
            >
              Sign Out
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
