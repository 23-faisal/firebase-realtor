import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../config/firebase";
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { db } from "../config/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const navigate = useNavigate();

  const SignUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);

      //Check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
      toast.success("Sign up successfully");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  };
  return (
    <div>
      <button
        type="button"
        onClick={SignUpWithGoogle}
        className="flex items-center justify-center w-full bg-red-600 gap-1 px-7 py-3 rounded-lg hover:bg-red-700 transition duration-200 ease-in-out active:bg-red-800 shadow-md active:shadow-lg"
      >
        <FcGoogle className="bg-white rounded-full " />
        <span className="text-white">Continue with Google</span>
      </button>
    </div>
  );
};

export default OAuth;
