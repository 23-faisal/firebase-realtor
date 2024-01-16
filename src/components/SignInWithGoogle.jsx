import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, db, googleProvider } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

const SignInWithGoogle = () => {
  const navigate = useNavigate();
  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          username: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });

        toast.success("Sign up with google successfully");
        navigate("/");
      }
    } catch (err) {
      toast.error("Could not authorized with google");
    }
  };
  return (
    <div>
      <button
        type="button"
        onClick={SignInWithGoogle}
        className="flex items-center justify-center gap-2 w-full py-3 my-6 bg-red-600 text-xl text-white font-semibold uppercase rounded-lg hover:bg-red-700 transition duration-200 ease-in-out hover:shadow-lg  active:bg-red-900"
      >
        <FcGoogle className="rounded-full bg-white text-xl " />
        Sign in with google
      </button>
    </div>
  );
};

export default SignInWithGoogle;
