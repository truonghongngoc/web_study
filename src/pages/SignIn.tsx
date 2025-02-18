import { useCallback, useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = useCallback(() => {
    const newErrors = {};
    if (email === "") {
      newErrors.email = "Trường hợp này bắt buộc";
    }
    if (password === "") {
      newErrors.password = "Trường hợp này bắt buộc";
    }
    setErrors({ ...newErrors });
    if (!Object.keys(newErrors).length) {
      navigate("/");
    }
  }, [email, password]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
  <div className="container">
    <div className="container-left">
      <img width={"100%"}  height={"auto"} src="src/image/Authentication Flow (Community) (1)/Desktop/Placeholder Auth.png"></img>
   
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
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
          ></Input>
           <label >{errors?.email}</label>
        
        </div>
        <div className="input-2">
          <Input
           placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
          ></Input>
           <label>{errors?.password}</label>
          {/* <p className="text-error">Message</p> */}
        </div>
        <div className="checkbox">
          <input type="checkbox"/>
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
            <img src="src/image/logo/Master/Social Media - Logos.png" alt=""/>
            Login with google
            </button>
          {/* <button type="submit" className="btn-loginw">Login with google</button> */}
          </div>
          <div className="img">
            <button className="btn-loginw">
            <img src="src/image/logo/Master/Social Media - Logos.png" alt=""/>
            Login with google
            </button>
          {/* <button type="submit" className="btn-loginw">Login with google</button> */}
          </div>
          <div className="img">
            <button className="btn-loginw">
            <img src="src/image/logo/Master/Social Media - Logos.png" alt=""/>
            Login with google
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
