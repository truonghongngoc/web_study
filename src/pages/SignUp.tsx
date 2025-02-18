import { useCallback, useState } from "react";
import Input from "../component/Input";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
// import Button from "../component/Button";
export type ErrorsFormValue = {
  [key: string]: {
    message: string;
  };
};
export const schemaSignup = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  password: yup.string().required(),
});
type TSignupFormValue = yup.InferType<typeof schemaSignup>;
export const defaultSignup: TSignupFormValue = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
};
export const SignUp = () => {
  const [formValue, setFormValue] = useState(defaultSignup);
  const [errors, setErrors] = useState<ErrorsFormValue>({});
  const navigate = useNavigate();
  const validation = useCallback(() => {
    setErrors({});
    try {
      schemaSignup.validateSync(formValue, { abortEarly: false });
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
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      name: e.target.value,
    });
  }
  function handleChangeLastName(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      lastName: e.target.value,
    });
  }

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      email: e.target.value,
    });
  }
  function handleChangePhone(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      phone: e.target.value,
    });
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      password: e.target.value,
    });
  }
  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (validation()) {
      navigate("/");
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
            src="src/image/signup/Desktop/Placeholder Auth.png"
          ></img>
        </div>
        <div className="container-right">
          <div className="logo">
            <img src="src/image/App Logo.png"></img>
          </div>
          <div className="content">
            <p className="title">Create your account</p>
            <p className="des">Hello there! Let’s create your account.</p>
          
            <div className="input-3">
              <div>
              <Input
                placeholder="name"
                value={formValue.name}
                onChange={  handleChangeName}
              ></Input>
              <br></br>

              <label >{errors?.name?.message}</label>
              </div>
              <div>
              <Input
                placeholder="LastName"
                // width="880px"
                margin-left="20px;"
                value={formValue.lastName}
                onChange={handleChangeLastName}
              ></Input>
              <br></br>

              <label>{errors?.lastName?.message}</label>
              </div>
            </div>
            <div className="input-2">
              <Input
                placeholder="Email"
                value={formValue.email}
                onChange={handleChangeEmail}
              ></Input>
              <label>{errors?.email?.message}</label>
              {/* <p className="text-error">Message</p> */}
            </div>
            <div className="input-2">
              <Input
                placeholder="Phone number"
                value={formValue.phone}
                onChange={handleChangePhone}
              ></Input>
              <label>{errors?.phone?.message}</label>
              {/* <p className="text-error">Message</p> */}
            </div>
            <div className="input-2">
              <Input
                placeholder="Password"
                value={formValue.password}
                onChange={handleChangePassword}
              ></Input>
              <label>{errors?.password?.message}</label>
              {/* <p className="text-error">Message</p> */}
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <label className="lb-x" for="vehicle1">
                I agree to Platform
                <a>Terms of Serivce </a>and <a>Privacy Policy</a>{" "}
              </label>
            </div>
            <div>
              <button className="btn-login">Creat my account</button>
            </div>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="here">
              <p>Joined us before ? </p>
              <a href="/sign-in"> Login</a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SignUp;
