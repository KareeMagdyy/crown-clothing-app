import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGoogleRedirect,
  creatUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.util";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./SignInForm.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logGoogleUserRedirect = async () => {
    const res = await getRedirectResult(auth);
    if (res) {
      await creatUserDocumentFromAuth(res.user);
    }
  };

  useEffect(() => {
    logGoogleUserRedirect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Invalid Email");
      }
      if (error.code === "auth/wrong-password") {
        alert("Invalid Password");
      }

      console.error(error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
          required
        />
        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
          required
        />
        <div className='buttons-container'>
          <Button type='submit' children='Sign In' />
          <Button
            type='button'
            onClick={signInWithGoogleRedirect}
            children='Sign In With Google'
            buttonType='google'
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
