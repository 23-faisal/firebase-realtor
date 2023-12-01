import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const ForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
      navigate("/sign-in");
    } catch (err) {
      toast.error("Could not send reset password");
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-5 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%] lg:w-[50%]  mb-12 md:mb-6  ">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww"
            alt="Key Image"
            className="w-full rounded-2xl "
          />
        </div>
        {/* Form  */}
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={ForgotPassword}>
            <input
              onChange={onChange}
              type="email"
              id="email"
              value={email}
              placeholder="Email Address"
              className="w-full px-4 py-2  text-xl text-gray-700 bg-white rounded-md border-gray-300  transition ease-in-out"
            />
            <button
              className="w-full mt-6 bg-blue-500 text-white hover:bg-blue-700 px-7 py-3 transition duration-200 ease-in-out rounded-lg text-sm font-medium uppercase shadow-md hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Send Reset Password
            </button>

            {/* Register or Sign in */}
            <div className="flex  justify-between whitespace-nowrap mt-6 text-sm sm:text-md ">
              <p className="">
                Don&apos;t have a Account?
                <Link
                  className="text-red-600 hover:text-red-700 ml-1 transition duration-200 ease-in-out"
                  to="/sign-up"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                  to="/sign-in"
                >
                  Sign in instead
                </Link>
              </p>
            </div>

            <div className="flex items-center my-4  before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            {/* Sign in with Google */}
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
