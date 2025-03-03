import React from "react";
import { useCallback, useState } from "react";

import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { Box, Button, Image, Text, Input } from "@chakra-ui/react";

export type ErrorsFormValue = {
  [key: string]: {
    message: string;
  };
};
export const schemaForgot = yup.object().shape({
  email: yup.string().required().email(),
});
type TForgotFormValue = yup.InferType<typeof schemaForgot>;
export const defaultForgot: TForgotFormValue = {
  email: "",
};
export const Forgot = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(defaultForgot);
  const [errors, setErrors] = useState<ErrorsFormValue>({});

  const validation = useCallback(() => {
    setErrors({});
    try {
      schemaForgot.validateSync(formValue, { abortEarly: false });
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
  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (validation()) {
      navigate("/sign-in");
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
            src="src/image/signup/Desktop/Placeholder Auth.png"
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
              src="src/image/App Logo.png"
            ></Image>
          </Box>
          <Box display={{ xl: "none", base: "flex" }} justifyContent={"center"}>
            <Image
              width={"auto"}
              height={"306px"}
              src="src/image/fgot/Mobile/Placeholder Container.png"
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
            <Text fontSize={"4xl"} marginTop={"25px"} textAlign={"center"}>
              Forgot Password
            </Text>
            <Text
              line-height={"24px"}
              letter-spacing={"0%"}
              marginTop={"15px"}
              textAlign={"center"}
              color={"#808B9A"}
            >
              Don’t worry! It’s happens. Please enter the email address
              associated with your account.
            </Text>
            <Box marginTop={"32px"}>
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

            <Button
              type="submit"
              display={"flex"}
              marginTop={{ base: "170px", xl: "42px" }}
              backgroundColor={"#1B85F3"}
              width={"full"}
              border={"1px solid rgb(203, 203, 203)"}
              color={"rgb(255, 255, 255)"}
              height={"50px"}
              borderRadius={"10px"}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    // </Box>
  );
};

export default Forgot;
