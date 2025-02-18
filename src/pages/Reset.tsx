import { useCallback, useState } from "react";
import Input from "../component/Input";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
export type ErrorsFormValue = {
  [key: string]: {
    message: string;
  };
};
export const schemaReset = yup.object().shape({
 
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
});
type TResetFormValue = yup.InferType<typeof schemaReset>;
export const defaultReset: TResetFormValue = {

  password: "",
  confirmPassword: "",
};
export const Reset = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(defaultReset);
  const [errors, setErrors] = useState<ErrorsFormValue>({});
  const validation = useCallback(() => {
    setErrors({});
    try {
      schemaReset.validateSync(formValue, { abortEarly: false });
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
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      password : e.target.value,
    });
  }
  function handleChangeConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
    confirmPassword: e.target.value,
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
            <img width={"100%"}  height={"auto"} src="src/image/re/Desktop/Placeholder Auth.png"></img>
         
          </div>
          <div className="container-right">
            <div className="logo">
              <img src="src/image/App Logo.png"></img>
            </div>
            <div className="content">
              <p className="title">
                Reset Password
              </p>
              <p className="des">
              
              
              </p>
              <div className="input-1">
                <Input
                 placeholder="Password"
                       value={formValue.password}
                       onChange={(e) => handleChangePassword(e)}
                ></Input>
                 <label>{errors?.password?.message}</label>
              
              </div>
              <div className="input-2">
                <Input
                 placeholder="Confirm new password"
                       value={formValue.confirmPassword}
                       onChange={(e) => handleChangeConfirmPassword(e)}
                ></Input>
                 <label>{errors?.confirmPassword?.message}</label>
             
                <button className="btn-login">Submit</button><br></br><br></br>
                <a  className=" lg-reset" href="/sign-in">Login</a>
              </div>
             
            </div>
          </div>
      </div>
    </form>
  );
};
export default Reset;
