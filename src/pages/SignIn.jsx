import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SignInWithGoogle from "../components/SignInWithGoogle";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const OnChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success("Sign in successfully!");
        navigate("/");
      }
    } catch (err) {
      toast.error("Something went wrong!!! Please try again later.");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-3">
      <h1 className="text-3xl mt-6 text-center font-bold  ">Sign In</h1>
      <div className="max-w-6xl  md:flex md:justify-center  md:items-center  px-6 py-12">
        <div className="w-[100%] md:w-[67%] lg-w[50%] mb-12 md:mb-6  ">
          <img
            className="w-full rounded-lg "
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key image"
          />
        </div>
        <div className="w-full md:w-[33%] lg:w-[50%] md:ml-12 lg:ml-20 ">
          <form onSubmit={OnSubmit} className="flex flex-col  gap-6">
            <input
              className="w-full rounded-md px-2 py-4 text-xl text-gray-700 bg-white border-gray-300 transition duration-150 ease-in-out"
              type="email"
              placeholder="Email address"
              id="email"
              value={email}
              onChange={OnChange}
            />

            <div className="relative ">
              <input
                className="w-full rounded-md px-2 py-4 text-xl text-gray-700 bg-white border-gray-300 transition duration-150 ease-in-out relative "
                type={showPassword ? "password" : "text"}
                placeholder="Password..."
                id="password"
                value={password}
                onChange={OnChange}
              />

              {showPassword ? (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-6 right-4 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-6 right-4 cursor-pointer"
                />
              )}
            </div>

            <div className="md:flex  md:items-center md:justify-between  mt-3">
              <p className="text-md">
                <span className="text-gray-500 ">
                  Don&apos;t have an account?
                </span>
                <Link
                  className="text-red-500 ml-2 hover:text-red-700 transition duration-150 ease-in-out "
                  to="/sign-up"
                >
                  Register
                </Link>
              </p>
              <p className="text-md mt-3 sm:mt-0">
                <Link
                  className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
                  to={"/forgot-password"}
                >
                  Forgot Password
                </Link>
              </p>
            </div>
            <button
              className="w-full py-3  bg-blue-600 text-xl text-white font-semibold uppercase rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg  active:bg-blue-900"
              type="submit"
            >
              sign in
            </button>
            <div className="flex items-center   before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <SignInWithGoogle />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
