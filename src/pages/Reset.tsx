import { useCallback, useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import "../index.css";
import { Box, Button, Image, Text, Input } from "@chakra-ui/react";
import axios from "axios";
import { toaster } from "../components/ui/toaster";

export type ErrorsFormValue = {
  [key: string]: {
    message: string;
  };
};
export const schemaReset = yup.object().shape({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp"),
});
type TResetFormValue = yup.InferType<typeof schemaReset>;
export const defaultReset: TResetFormValue = {
  password: "",
  confirmPassword: "",
};
export const Reset = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>();
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
      password: e.target.value,
    });
  }
  function handleChangeConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      confirmPassword: e.target.value,
    });
  }
  async function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (validation()) {
      setIsLoading(true);
      try {
        await axios.patch("http://localhost:3001/auth/change-password", {
          password: formValue.password,
          token: searchParams.get("token"),
        });
        navigate("/sign-in");
      } catch (error) {
        toaster.create({
          title: "Throw ",
        });
      } finally {
        setIsLoading(false);
      }
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
        width={"100%"}
        height={"100vh"}
        marginX={"auto"}
        maxW={"1440px"}
        display={{ base: "block", xl: "flex" }}
      >
        <Box
          width={"720px"}
          padding={"30px"}
          display={{ xl: "block", base: "none" }}
        >
          <Image
            width={"100%"}
            height={"auto"}
            src="src/assets/background_1.png"
          ></Image>
        </Box>
        <Box flex={1}>
          <Box
            display={"flex"}
            justifyContent={{ xl: "flex-end", base: "flex-start" }}
          >
            <Image
              marginTop={{ xl: "40px", base: "16px" }}
              marginLeft={{ base: "24px" }}
              src="src/assets/logo.png"
            ></Image>
          </Box>
          <Box display={{ xl: "none", base: "flex" }} justifyContent={"center"}>
            <Image
              width={"auto"}
              height={"240px"}
              src="src/assets/background_mobile_1.png"
            ></Image>
          </Box>
          <Box marginLeft={"auto"} marginRight={"auto"}>
            <Box
              bg={{ base: "white", xl: "initial" }}
              borderRadius={"32px"}
              maxWidth={"440px"}
              mx="auto"
              w={"100%"}
              px="24px"
            >
              <Text
                marginTop={{ xl: "150px", base: "24px" }}
                fontFamily={"Arial"}
                textStyle={"4xl"}
                textAlign={"center"}
                color={"#39434F"}
              >
                Reset Password
              </Text>
              <Box marginTop={"32px"}>
                <Input
                  height={"54px"}
                  border={"2px solid #D1E6FF"}
                  borderRadius={"10px"}
                  placeholder="Password"
                  value={formValue.password}
                  onChange={(e) => handleChangePassword(e)}
                />
                <Box color={"red"} marginTop={"5px"}>
                  <label>{errors?.password?.message}</label>
                </Box>
              </Box>
              <Box marginTop={"30px"}>
                <Input
                  height={"54px"}
                  border={"2px solid #D1E6FF"}
                  borderRadius={"10px"}
                  placeholder="Confirm new password"
                  value={formValue.confirmPassword}
                  onChange={(e) => handleChangeConfirmPassword(e)}
                />
                <Box color={"red"} marginTop={"5px"}>
                  <label>{errors?.confirmPassword?.message}</label>
                </Box>
                <Button
                  backgroundColor={"#1B85F3"}
                  borderRadius={"8px"}
                  type="submit"
                  height={"50px"}
                  marginTop={"50px"}
                  w={"full"}
                  loading={isLoading}
                >
                  Submit
                </Button>
                {/* <br></br>
                <br></br>
                <Box textAlign={"center"}>
                  <a className=" lg-reset" href="/sign-in">
                    Login
                  </a>
                </Box> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Reset;
