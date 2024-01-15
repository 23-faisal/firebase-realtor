import { FcGoogle } from "react-icons/fc";

const SignInWithGoogle = () => {
  return (
    <div>
      <button
        className="flex items-center justify-center gap-2 w-full py-3 my-6 bg-red-600 text-xl text-white font-semibold uppercase rounded-lg hover:bg-red-700 transition duration-200 ease-in-out hover:shadow-lg  active:bg-red-900"
        type="submit"
      >
        <FcGoogle className="rounded-full bg-white text-xl " />
        Sign in with google
      </button>
    </div>
  );
};

export default SignInWithGoogle;
