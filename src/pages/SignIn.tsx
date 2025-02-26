import { useCallback, useState } from "react";
// import Input from "../component/Input";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { Box, Button, Image, Text, Input } from "@chakra-ui/react";

export type ErrorsFormValue = {
  [key: string]: {
    message: string;
  };
};
export const schemaSignin = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});
type SigninFormValue = yup.InferType<typeof schemaSignin>;
export const defaultSignin: SigninFormValue = {
  email: "",
  password: "",
};
export const SignIn = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(defaultSignin);
  const [errors, setErrors] = useState<ErrorsFormValue>({});
  const validation = useCallback(() => {
    setErrors({});
    try {
      schemaSignin.validateSync(formValue, { abortEarly: false });
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
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      password: e.target.value,
    });
  }
  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (validation()) {
      navigate("/#");
    }
  }
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Box
        w={"100%"}
        h={"100vh"}
        display={"flex"}
    
      >
        <Box  padding={"30px"}>
          <Image
          width={"100%"}
          height={"auto"}
            // padding={"30px"}
            // border-radius={"24px"}
            src="src/image/signup/Desktop/Placeholder Auth.png"
          ></Image>
        </Box>
      

        <Box width="760px">
          <Box>
            <Image
               float={"right"}
               padding={"40px"}
              src="src/image/App Logo.png"
            ></Image>
          </Box>
          <Box
            // marginLeft={"auto"}
            // marginRight={"auto"}
            width={"500px"}
          ></Box>
          <Text textStyle={"5xl"} marginTop={"100px"} marginLeft={"300px"}>
            Login
          </Text>

          <Text
            // marginLeft={"120px"}
            line-height={"24px"}
            letter-spacing={"0%"}
            marginTop={"15px"}
            textAlign={"center"}
            color={" #808B9A"}
          >
            Welcome back ! Please enter your detail .
          </Text>
          <Box
          marginTop={"50px"} 
          marginLeft={"150px"} width={"480px"}>
            <Input
              height={"54px"}
              border={"2px solid #D1E6FF"}
              borderRadius={"10px"}
              placeholder="Email"
              value={formValue.email}
              onChange={(e) => handleChangeEmail(e)}
            />

            <label>{errors?.email?.message}</label>
          </Box>
          <Box
          marginTop={"40px"}
          marginLeft={"150px"} width={"480px"} >
            <Input
              height={"54px"}

              border={"2px solid #D1E6FF"}
              borderRadius={"10px"}
              placeholder="Password"
              value={formValue.password}
              onChange={(e) => handleChangePassword(e)}
            />
            <br></br>
            <label>{errors?.password?.message}</label>
            {/* <p className="text-error">Message</p> */}
          </Box>
          <Box marginLeft={"150px"} >
            <Input width={"5px"} 
           
            type="checkbox" />
            <label className="rm"  for="vehicle1">
              Remember information
            </label>
          </Box>
          <Box>
            <Button
              backgroundColor={" #1B85F3"}
              width={"480px"}
              borderRadius={"8px"}
              type="submit"
              height={"50px"}
              marginTop={"30px"}
              marginLeft={"155px"}
            >
              Login
            </Button>
          </Box>
          <br></br>
          <Box marginLeft={"350px"} color={"#1B85F3"}>
            <a href="/reset">Forget password?</a>
          </Box>
          <br></br>
          <hr></hr>
          <Box>
            <Box marginLeft={"5px"}>
              <Box >
                <Button
                  display={"flex"}
                  marginTop={"30px"}
                  backgroundColor={"#ffffff"}
                  width={"480px"}
                  border={"1px solid rgb(203, 203, 203)"}
                  color={"rgb(134, 134, 134)"}
                  height={"50px"}
                  
                  marginLeft={"150px"}
                  borderRadius={"10px"}
                >
                  <Box display={"flex"} width={"260px"}>
                    <Image
                      src="src/image/logo/Master/Social Media - Logos.png"
                      alt=""
                    />
                    <Box
                      
                      background-color={"#D9DFE6"}
                      height={"28px"}
                      margin-left={"24px"}
                    ></Box>
                  </Box>
                  <Text
                    margin-left={"-78px"}
                    display={"flex"}
                    justify-content={"center"}
                    width={"100%"}
                  >
                    Login with Facebook
                  </Text>
                </Button>
                {/* <button type="submit" className="btn-loginw">Login with google</button> */}
              </Box>

              <Box>
                <Button
                  display={"flex"}
                  marginTop={"30px"}
                  backgroundColor={"#ffffff"}
                  width={"480px"}
                  border={"1px solid rgb(203, 203, 203)"}
                  color={"rgb(134, 134, 134)"}
                  height={"50px"}
                  borderRadius={"10px"}
                  marginLeft={"150px"}
                >
                  <Box display={"flex"} width={"260px"}>
                    <Image
                      src="src/image/logo/Master/Social Media - Logos.png"
                      alt=""
                    />
                    <Box
                      width={"1px"}
                      background-color={"#D9DFE6"}
                      height={"28px"}
                      margin-left={"24px"}
                    ></Box>
                  </Box>
                  <Text
                    margin-left={"-78px"}
                    display={"flex"}
                    justify-content={"center"}
                    width={"100%"}
                  >
                    Login with Facebook
                  </Text>
                </Button>
                {/* <button type="submit" className="btn-loginw">Login with google</button> */}
              </Box>
              <Box>
                <Button
                  display={"flex"}
                  marginTop={"30px"}
                  backgroundColor={"#ffffff"}
                  width={"480px"}
                  border={"1px solid rgb(203, 203, 203)"}
                  color={"rgb(134, 134, 134)"}
                  height={"50px"}
                  borderRadius={"10px"}
                  marginLeft={"150px"}
                >
                  <Box display={"flex"} width={"260px"}>
                    <Image
                      src="src/image/logo/Master/Social Media - Logos.png"
                      alt=""
                    />
                    <Box
                      width={"1px"}
                      background-color={" #D9DFE6"}
                      height={"28px"}
                      margin-left={"24px"}
                    ></Box>
                  </Box>
                  <Text display={"flex"} textAlign={"center"} width={"100%"}>
                    Login with Apple
                  </Text>
                </Button>
                {/* <button type="submit" className="btn-loginw">Login with google</button> */}
              </Box>
            </Box>
            <br></br>
            <hr></hr>
            <Box display={"flex"} marginLeft={"140px"} marginTop={"20px"}>
              <Text fontFamily={"Arial"} marginLeft={"150px"}>
                First time here ?
              </Text>
              <br></br>
              <Box marginLeft={"5px"} color={" #1B85F3"}>
                <a href="/sign-up">Sign up for free</a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default SignIn;
