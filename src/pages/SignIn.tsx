import { useCallback, useState } from "react";
// import Input from "../components/elements/Input";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// import "../index.css";
import { Box, Button, Image, Text, Input } from "@chakra-ui/react";
import { Checkbox } from "../components/ui/checkbox";

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
    <Box
      as="form"
      bg="#F7FAFC"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Box
        w={"100%"}
        h={"100vh"}
        marginX="auto"
        maxW={"1440px"}
        display={{ base: "block", xl: "flex" }}
      >
        <Box
          w={"720px"}
          padding={"30px"}
          display={{ xl: "block", base: "none" }}
        >
          <Image
            width={"100%"}
            height={"auto"}
            src="src/assets/background_2.png"
          ></Image>
        </Box>
        <Box flex={1}>
          <Box
            display={"flex"}
            justifyContent={{ xl: "flex-end", base: "flex-start" }}
          >
            <Image
              marginTop={{ xl: "40px", base: "16px" }}
              marginRight={"40px"}
              marginLeft={{ base: "24px" }}
              marginBottom={{ base: "16px" }}
              src="src/assets/logo"
            ></Image>
          </Box>
          <Box display={{ xl: "none", base: "flex" }} justifyContent={"center"}>
            <Image
              width={"auto"}
              height={"240px"}
              src="src/assets/background-sign-in-sp.png"
            ></Image>
          </Box>
          <Box
            bg={{ base: "white", xl: "initial" }}
            borderRadius={"32px"}
            maxWidth={"440px"}
            mx="auto"
            w={"100%"}
            px="24px"
          >
            <Text fontSize={"5xl"} marginTop={"25px"} textAlign={"center"}>
              Login
            </Text>
            <Text
              line-height={"24px"}
              letter-spacing={"0%"}
              marginTop={"15px"}
              textAlign={"center"}
              color={"#808B9A"}
            >
              Welcome back ! Please enter your detail .
            </Text>
            <Box marginTop={"50px"}>
              <Input
                height={"54px"}
                border={"2px solid #D1E6FF"}
                borderRadius={"10px"}
                placeholder="Email"
                value={formValue.email}
                onChange={(e) => handleChangeEmail(e)}
              />
              <Box color={"red"} marginTop={"5px"}>
                <label>{errors?.email?.message}</label>
              </Box>
            </Box>

            <Box marginTop={"40px"}>
              <Input
                height={"54px"}
                border={"2px solid #D1E6FF"}
                borderRadius={"10px"}
                placeholder="Password"
                value={formValue.password}
                onChange={(e) => handleChangePassword(e)}
              />
              <br></br>
              <Box color={"red"} marginTop={"5px"}>
                <label>{errors?.password?.message}</label>
              </Box>
            </Box>
            <Box mt="17px">
              <Checkbox color={"#808B9A"}>Remember information</Checkbox>
            </Box>
            <Box>
              <Button
                backgroundColor={"#1B85F3"}
                borderRadius={"8px"}
                type="submit"
                height={"50px"}
                marginTop={"30px"}
                w={"full"}
              >
                Login
              </Button>
            </Box>
            <Box color={"#1B85F3"} mt="17px" mb="33px" textAlign={"center"}>
              <a href="/reset">Forget password?</a>
            </Box>
            <Box>
              <hr></hr>
              {/* <Box>
              <Box> */}
              <Box>
                <Button
                  display={"flex"}
                  marginTop={"30px"}
                  backgroundColor={"#ffffff"}
                  width={"full"}
                  border={"1px solid rgb(203, 203, 203)"}
                  color={"rgb(134, 134, 134)"}
                  height={"50px"}
                  borderRadius={"10px"}
                >
                  <Box display={"flex"} width={"120px"}>
                    <Image src="src/assets/social_icon_google.png" alt="" />
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
              </Box>
              <Box>
                <Button
                  display={"flex"}
                  marginTop={"30px"}
                  backgroundColor={"#ffffff"}
                  width={"full"}
                  border={"1px solid rgb(203, 203, 203)"}
                  color={"rgb(134, 134, 134)"}
                  height={"50px"}
                  borderRadius={"10px"}
                >
                  <Box display={"flex"} width={"120px"}>
                    <Image src="src/assets/social_icon_google.png" alt="" />
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
              </Box>
              <Box>
                <Button
                  display={"flex"}
                  marginTop={"30px"}
                  backgroundColor={"#ffffff"}
                  width={"full"}
                  border={"1px solid rgb(203, 203, 203)"}
                  color={"rgb(134, 134, 134)"}
                  height={"50px"}
                  borderRadius={"10px"}
                >
                  <Box display={"flex"} width={"120px"}>
                    <Image src="src/assets/social_icon_google.png" alt="" />
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
              </Box>
            </Box>
            <br></br>
            <br></br>
            <hr></hr>
            <Box display={"flex"} justifyContent={"center"} marginTop={"42px"}>
              <Text fontFamily={"Arial"}>First time here ?</Text>
              <br></br>
              <Box marginLeft={"5px"} color={" #1B85F3"}>
                <a href="/sign-up">Sign up for free</a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    // </Box>
  );
};

export default SignIn;
