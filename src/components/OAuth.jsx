import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <div>
      <button className="flex items-center justify-center w-full bg-red-600 gap-1 px-7 py-3 rounded-lg hover:bg-red-700 transition duration-200 ease-in-out active:bg-red-800 shadow-md active:shadow-lg">
        <FcGoogle className="bg-white rounded-full " />
        <span className="text-white">Continue with Google</span>
      </button>
    </div>
  );
};

export default OAuth;
