import { useEffect } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  // signInWithGooglePopup,
  signInWithGoogleRedirect,
  creatUserDocumentFromAuth,
} from "../../utils/firebase.util";

export const SignIn = () => {
  const logGoogleUserRedirect = async () => {
    const res = await getRedirectResult(auth);
    if (res) {
      const userDocRef = await creatUserDocumentFromAuth(res.user);
    }
  };

  useEffect(() => {
    logGoogleUserRedirect();
  }, []);

  // const logGoogleUserPopup = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await creatUserDocumentFromAuth(user);
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      {/* <button onClick={logGoogleUserPopup}>Sign In With Google Popup</button> */}
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};
