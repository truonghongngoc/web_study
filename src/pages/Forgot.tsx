import { useCallback, useState } from "react";
import Input from "../component/Input";
// import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = useCallback(() => {
    const newErrors = {};
    if (email && phone === "") {
      newErrors.email = "Trường hợp này bắt buộc";
    }
    setErrors({ ...newErrors });
    if (!Object.keys(newErrors).length) {
      navigate("/confirm");
    }
  }, [email, phone]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <label>{errors?.email}</label>
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

export default SignIn;
