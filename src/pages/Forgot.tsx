import React from "react";
import { useCallback, useState } from "react";

import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { Box, Button, Image, Text, Input } from "@chakra-ui/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
      </HelmetProvider>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <script type="module" src="src/main.tsx"></script>

        <Box
          className="wrapper"
          // w={"100%"}
          // h={"100vh"}

          display={"flex"}
          grid-template-columns={"1fr 1fr"}
        >
          <Box id="pic-left">
            <Image
              // width="660px"
              // height="964px"
              padding={"30px"}
              border-radius={"24px"}
              src="src/image/signup/Desktop/Placeholder Auth.png"
            ></Image>
          </Box>

          <Box id="b-right">
            <Box float={"right"}>
              <Image src="src/image/App Logo.png" marginTop={"30px"}></Image>
            </Box>

            <Box>
              <Text
                id="text-fg"
                marginTop={"150px"}
                textStyle={"4xl"}
                // textAlign={"center"}
                color={"#39434F"}
                marginLeft={"220px"}
              >
                Forgot password ?
              </Text>

              <Text
                textAlign={"center"}
                marginTop={"20px"}
                color={"#808B9A"}
                textStyle={""}
              >
                Don’t worry! It’s happens. Please enter the email address
                <br></br> associated with your account.
              </Text>
              <Box marginTop={"50px"} marginLeft={"100px"} width={"480px"}>
                <Input
                  id={"ip"}
                  height={"54px"}
                  marginTop={"10px"}
                  border={"2px solid #D1E6FF"}
                  borderRadius={"10px"}
                  placeholder="Email / Phone number"
                  value={formValue.email}
                  onChange={(e) => handleChangeEmail(e)}
                />
                <label>{errors?.email?.message}</label>
              </Box>

              <Box marginLeft={"100px"}>
                <Button
                  type="submit"
                  width={"480px"}
                  height={"54px"}
                  marginTop={"30px"}
                  borderRadius={"10px"}
                  backgroundColor={"rgb(0, 116, 239)"}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Forgot;
