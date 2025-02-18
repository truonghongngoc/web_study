import React, { useCallback, useState } from "react";
import Input from "../component/Input";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import '../index.css'

export type ErrorsFormValue = {
  [key: string]: {
    message: string;
  };
};
export const schemaForgot = yup.object().shape({
  email: yup.string().required().email(),
});
type TForgotFormValue = yup.InferType<typeof schemaForgot>;
export const defaultForgot: TForgotFormValue = {
  email: "",
};
export const Forgot = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(defaultForgot);
  const [errors, setErrors] = useState<ErrorsFormValue>({});
  const validation = useCallback(() => {
    setErrors({});
    try {
      schemaForgot.validateSync(formValue, { abortEarly: false });
    } catch (error) {
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
  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (validation()) {
      navigate("/sign-in");
    }
  }
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="container">
        <div className="container-left">
          <img
            width={"100%"}
            height={"auto"}
            src="src/image/forgot/Desktop/Placeholder Auth.png"
          ></img>
        </div>
        <div className="container-right">
          <div className="logo">
            <img src="src/image/App Logo.png"></img>
          </div>
          <div className="content">
            <p className="title">Forgot password</p>
            <p className="des">
              Don’t worry! It’s happens. Please enter the email address
              associated with your account.
            </p>
            <div className="input-1">
              <Input
                placeholder="Email / Phone number"
                value={formValue.email}
                onChange={(e) => handleChangeEmail(e)}
              ></Input>
              <label>{errors?.email?.message}</label>
            </div>

            <div>
              <button type="submit" className="btn-login">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Forgot;
