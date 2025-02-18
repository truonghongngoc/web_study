import { useCallback, useState } from "react";
import Input from "../component/Input";
import { useNavigate } from "react-router-dom";
// import Button from "../component/Button";

export const Reset = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    const newErrors = {};
    if (passwordConfirm === "") {
      newErrors.passwordConfirm = "Truong hop nay bat buoc";
    }
    if (password === "") {
      newErrors.password = "Trường hợp này bắt buộc";
    }
    if (password !==passwordConfirm  ) {
      newErrors.passwordConfirm = "Mật khẩu không khớp";
    }
    setErrors({ ...newErrors });
    if (!Object.keys(newErrors).length) {
      navigate("/sign-in");
    }
  }, [password, passwordConfirm]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
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
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                ></Input>
                 <label>{errors?.password}</label>
              
              </div>
              <div className="input-2">
                <Input
                 placeholder="Confirm new password"
                       value={passwordConfirm}
                       onChange={(e) => setPasswordConfirm(e.target.value)}
                ></Input>
                 <label>{errors?.passwordConfirm}</label>
             
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
