import { useCallback, useState } from "react";
import Input from "../component/Input";
import { useNavigate } from "react-router-dom";
// import Button from "../component/Button";

export const SignUp = () => {
  const [name,setName]=useState("");
  const [lastName,setLastName] =useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();


  const handleSubmit = useCallback(() => {
    const newErrors = {};
    if (name === "") {
      newErrors.name = "Trường hợp này bắt buộc";
    }
    if (lastName === "") {
      newErrors.lastName = "Trường hợp này bắt buộc";
    }
    if (email === "") {
      newErrors.email = "Trường hợp này bắt buộc";
    }
   if(phone === "") {
    newErrors.phone = "Trường hợp này bắt buộc";
   }
   if(password === "") {
    newErrors.password = "Trường hợp này bắt buộc";
   }
    setErrors({ ...newErrors });
    if (!Object.keys(newErrors).length) {
      navigate("/");
    }
  }, [name,lastName,email,phone,password]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >   
 <div className="container">
     <div className="container-left">
       <img width={"100%"}  height={"auto"} src="src/image/signup/Desktop/Placeholder Auth.png"></img>
    
     </div>
     <div className="container-right">
       <div className="logo">
         <img src="src/image/App Logo.png"></img>
       </div>
       <div className="content">
         <p className="title">
          Create your account
         </p>
         <p className="des">
         
         Hello there! Let’s create your account.
         </p>
         <div className="input-3">
           <Input
            placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
           ></Input>
          
            <label>{errors?.name}</label>
            <Input
            placeholder="LastName"
            // width="880px"
            margin-left="20px;"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
           ></Input>
            <label>{errors?.lastName}</label>
         
         </div>
         <div className="input-2">
           <Input
            placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
           ></Input>
            <label>{errors?.email}</label>
           {/* <p className="text-error">Message</p> */}
         </div>
         <div className="input-2">
           <Input
            placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
           ></Input>
            <label>{errors?.phone}</label>
           {/* <p className="text-error">Message</p> */}
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
           <label className="lb-x" for="vehicle1">I agree to Platform 
            <a>Terms of Serivce </a>and <a>Privacy Policy</a> </label>
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
 )
 };
export default SignUp;
