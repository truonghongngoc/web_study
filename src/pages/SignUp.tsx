import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import "../index.css";

import { Box, Button, Image, Text, Input } from "@chakra-ui/react";
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
      <Box width={"100%"} height={"100vh"} display={"flex"}>
        <Box padding={"30px"}>
          <Image
            width={"100%"}
            height={"auto"}
            src="src/image/signup/Desktop/Placeholder Auth.png"
          ></Image>
        </Box>
        <Box width={"760px"}>
          <Box
          // paddingTop={"40px"}
          // paddingRight={"40px"}
          // display={"flex"}
          // justifyContent={"flex-end"}
          >
            <Image
              float={"right"}
              padding={"40px"}
              src="src/image/App Logo.png"
            ></Image>
          </Box>
          <Box marginLeft={"auto"} marginRight={"auto"} maxWidth={"480px"}>
            <Text
              marginTop={"120px"}
              fontFamily={"Arial"}
              textAlign={"center"}
              color={"#39434F"}
              textStyle={"4xl"}
            >
              Create your account
            </Text>
            <Text
              marginTop={"10px"}
              fontFamily={"Noto Sans"}
              marginLeft={"70px"}
              color={"#808B9A"}
            >
              Hello there! Let’s create your account.
            </Text>

            <Box display={"flex"} marginTop={"50px"} width={"480px"}>
              <Box>
                <Input
                  height={"54px"}
                  border={"2px solid #D1E6FF"}
                  borderRadius={"10px"}
                  placeholder="Name"
                  value={formValue.name}
                  onChange={(e) => handleChangeName(e)}
                />
                <br></br>

                <label>{errors?.name?.message}</label>
              </Box>
              <Box margin-left="20px">
                <Input
                  width={"250px"}
                  height={"54px"}
                  border={"2px solid #D1E6FF"}
                  borderRadius={"10px"}
                  placeholder="LastName"
                  marginLeft={"35px"}
                  value={formValue.lastName}
                  onChange={handleChangeLastName}
                />
                <br></br>

                <label>{errors?.lastName?.message}</label>
              </Box>
            </Box>
            <Box>
              <Input
                height={"54px"}
                border={"2px solid #D1E6FF"}
                marginTop={"30px"}
                placeholder="Email"
                value={formValue.email}
                onChange={handleChangeEmail}
                borderRadius={"10px"}
              />
              <label>{errors?.email?.message}</label>
              {/* <p className="text-error">Message</p> */}
            </Box>
            <Box>
              <Input
                height={"54px"}
                border={"2px solid #D1E6FF"}
                marginTop={"50px"}
                borderRadius={"10px"}
                placeholder="Phone number"
                value={formValue.phone}
                onChange={handleChangePhone}
              />
              <label>{errors?.phone?.message}</label>
              {/* <p className="text-error">Message</p> */}
            </Box>
            <Box marginTop={"10px"}>
              <Input
                marginTop={"40px"}
                height={"54px"}
                border={"2px solid #D1E6FF"}
                borderRadius={"10px"}
                placeholder="Password"
                value={formValue.password}
                onChange={handleChangePassword}
              />
              <label>{errors?.password?.message}</label>
              {/* <p className="text-error">Message</p> */}
            </Box>
            <Box
              // fontFamily={"Arial"}
              color={"#808B9A"}
              marginTop={"16px"}
              // marginLeft={"17px"}
              display={"flex"}
            >
              {/* <Checkbox defaultChecked>
                click */}
                {/* <Input width={"5px"} type="checkbox" />
              <label className="lb" color={"#808B9A"} for="vehicle1">
                I agree to Platform
                <a>Terms of Serivce </a>and <a>Privacy Policy</a>   
              </label> */}
              {/* </Checkbox> */}
            </Box>
            <Box>
              <Button
                backgroundColor={"#1B85F3"}
                width={"480px"}
                borderRadius={"6px"}
                color={"white"}
                height={"54px"}
                marginTop={"30px"}
                type="submit"
              >
                Creat my account
              </Button>
            </Box>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <Box display={"flex"} marginLeft={"160px"} marginTop={"20px"}>
              <Text>Joined us before ? </Text>
              <a href="/sign-in"> Login</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
export default SignUp;
