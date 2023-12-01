import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { name, email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      console.log(user);

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
      toast.success("Sign up Successfully");
    } catch (error) {
      toast.error("Something went wrong this time");
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
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
          <form onSubmit={SubmitForm}>
            <input
              onChange={onChange}
              type="text"
              id="name"
              value={name}
              placeholder="Full Name"
              className="w-full px-4 py-2  text-xl text-gray-700 bg-white rounded-md border-gray-300  transition ease-in-out mb-6"
            />
            <input
              onChange={onChange}
              type="email"
              id="email"
              value={email}
              placeholder="Email Address"
              className="w-full px-4 py-2  text-xl text-gray-700 bg-white rounded-md border-gray-300  transition ease-in-out mb-6"
            />
            <div className="relative">
              <input
                onChange={onChange}
                className="w-full px-4 py-2  text-xl text-gray-700 bg-white rounded-md border-gray-300  transition ease-in-out"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Password"
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-3 top-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  className="absolute right-3 top-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}

              {/* Register or Sign in */}
              <div className="flex  justify-between whitespace-nowrap mt-6 text-sm sm:text-md ">
                <p className="">
                  Already have an account?
                  <Link
                    className="text-red-600 hover:text-red-700 ml-1 transition duration-200 ease-in-out"
                    to="/sign-in"
                  >
                    Sign in
                  </Link>
                </p>
                <p>
                  <Link
                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                    to="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </p>
              </div>
            </div>

            <button
              className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-700 px-7 py-3 transition duration-200 ease-in-out rounded-lg text-sm font-medium uppercase shadow-md hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Sign up
            </button>
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

export default SignUp;
