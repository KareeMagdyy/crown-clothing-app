import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from "../../utils/firebase.util";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
};
