import { useCallback, useState } from "react";
import Input from "../component/Input";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

export type ErrorsFormValue = {
  [key: string]: {
    message: string;
  };
};
export const schemaSignin = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
})
type SigninFormValue = yup.InferType<typeof schemaSignin>;
export const defaultSignin: SigninFormValue = {
  email: "",
  password: ""

};
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(defaultSignin);
  const [errors, setErrors] = useState<ErrorsFormValue>({});
  const validation = useCallback(() => {
    setErrors({});
    try {
      schemaSignin.validateSync(formValue, { abortEarly: false });
    }
    catch (error) {
      if (error instanceof yup.ValidationError) {
        if (error.inner) {
          const newErrors: ErrorsFormValue = {};
          error.inner.forEach((err) => {
            if (err.path && err.message) {
              newErrors[err.path] = { message: err.message };
            }
          });
          setErrors(newErrors);
          return false;
        }
      }
    }
    return true;
  }, [formValue]);
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      email: e.target.value,
    });
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      password: e.target.value,
    });
  };
  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (validation()) {
      navigate("/#")
    }
  }
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}>
      <div className="container">
        <div className="container-left">
          <img width={"100%"} height={"auto"} src="src/image/Authentication Flow (Community) (1)/Desktop/Placeholder Auth.png"></img>

        </div>
        <div className="container-right">
          <div className="logo">
            <img src="src/image/App Logo.png"></img>
          </div>
          <div className="content">
            <p className="title">
              Login
            </p>
            <p className="des">

              Welcome back!Please enter your detail .
            </p>
            <div className="input-1">
              <Input
                placeholder="Email"
                value={formValue.email}
                onChange={(e) => handleChangeEmail(e)}
              ></Input>
              <label >{errors?.email?.message}</label>

            </div>
            <div className="input-2">
              <Input
                placeholder="Password"
                value={formValue.password}
                onChange={(e) => handleChangePassword(e)}
              ></Input>
              <label>{errors?.password?.message}</label>
              {/* <p className="text-error">Message</p> */}
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <label className="cb" for="vehicle1">Remember information</label>
            </div>
            <div>
              <button className="btn-login">Login</button>
            </div>
            <br></br>
            <a className="fget" href="/reset" >Forget password?</a>
            <br></br>
            <br></br>
            <hr></hr>
            <div>
            <div className="img">
                <button className="btn-loginw">
                  <div className="btn-loginw-box1">
                    <img src="src/image/logo/Master/Social Media - Logos.png" alt="" />
                    <div className="btn-loginw-divider"></div>
                  </div>
                  <p className="btn-loginw-label">
                    Login with google
                  </p>
                </button>
                {/* <button type="submit" className="btn-loginw">Login with google</button> */}
              </div>
              <div className="img">
                <button className="btn-loginw">
                  <div className="btn-loginw-box1">
                    <img src="src/image/logo/Master/Social Media - Logos.png" alt="" />
                    <div className="btn-loginw-divider"></div>
                  </div>
                  <p className="btn-loginw-label">
                  Login with Facebook
                  </p>
                </button>
                {/* <button type="submit" className="btn-loginw">Login with google</button> */}
              </div>
              <div className="img">
                <button className="btn-loginw">
                  <div className="btn-loginw-box1">
                    <img src="src/image/logo/Master/Social Media - Logos.png" alt="" />
                    <div className="btn-loginw-divider"></div>
                  </div>
                  <p className="btn-loginw-label">
                  Login with Apple
                  </p>
                </button>
                {/* <button type="submit" className="btn-loginw">Login with google</button> */}
              </div>
            </div>
            <br></br>
            <hr></hr>
            <div className="here">
              <p>First time here ?</p>
              <a href="/sign-up">Sign up for free</a>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
};

export default SignIn;
