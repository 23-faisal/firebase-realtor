import { useState } from "react";
import { auth } from "../config/firebase";
import { signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const [changeDetail, setChangeDetail] = useState(false);

  const { name, email } = formData;
  const navigate = useNavigate();

  const SignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const OnChangeInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const OnSubmit = async () => {
    if (auth.currentUser.displayName !== name) {
      // Update display name in firebase auth
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      // Update name in firestore
      const docRef = doc(db, "users", auth.currentUser.id);
      await updateDoc(docRef, {
        name,
      });
      toast.success("Profile details updated");
    }
  };

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold ">My Profile</h1>
        <div className="w-full md:max-w-[50%] px-3 mt-6">
          <form>
            {/* Name Input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={OnChangeInput}
              className={`  mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out  ${
                changeDetail && "bg-red-300 "
              }`}
            />

            {/* Email Input */}

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out  "
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center gap-1 ">
                Do you want to change your name?{" "}
                <span
                  onClick={() => {
                    changeDetail && OnSubmit();
                    setChangeDetail(!changeDetail);
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 cursor-pointer"
                >
                  {changeDetail ? "Apply Change" : "Edit"}
                </span>
              </p>
              <p
                onClick={SignOut}
                className="text-blue-600 hover:text-blue-700 transition ease-in-out duration-200 cursor-pointer"
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
