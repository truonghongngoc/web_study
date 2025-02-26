import { useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import "../index.css";
import { Box, Button, Image, Text, Input } from "@chakra-ui/react";

export type ErrorsFormValue = {
  [key: string]: {
    message: string;
  };
};
export const schemaReset = yup.object().shape({
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});
type TResetFormValue = yup.InferType<typeof schemaReset>;
export const defaultReset: TResetFormValue = {
  password: "",
  confirmPassword: "",
};
export const Reset = () => {
  const navigate = useNavigate();
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
  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (validation()) {
      navigate("/sign-in");
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
            src="src/image/re/Desktop/Placeholder Auth.png"
          ></Image>
        </Box>
        <Box width="760px">
          <Box
          //  paddingTop={"40px"}
          //  paddingRight={"40px"}
          //  display={"flex"}
          //  marginLeft={"700px"}
          >
            <Image
              float={"right"}
              padding={"40px"}
              src="src/image/App Logo.png"
            ></Image>
          </Box>
          <Box marginLeft={"auto"} marginRight={"auto"} maxWidth={"480px"}>
            <Text
              marginTop={"150px"}
              fontFamily={"Arial"}
              textStyle={"4xl"}
              textAlign={"center"}
              color={"#39434F"}
            >
              Reset Password
            </Text>
            {/* < <p className="des">
              
              
              </p>> */}
            <Box marginTop={"34px"}>
              <Input
                height={"45px"}
                border={"2px solid #D1E6FF"}
                borderRadius={"10px"}
                placeholder="Password"
                value={formValue.password}
                onChange={(e) => handleChangePassword(e)}
              />
              <label>{errors?.password?.message}</label>
            </Box>
            <Box marginTop={"40px"}>
              <Input
                height={"54px"}
                border={"2px solid #D1E6FF"}
                borderRadius={"10px"}
                placeholder="Confirm new password"
                value={formValue.confirmPassword}
                onChange={(e) => handleChangeConfirmPassword(e)}
              />
              <label>{errors?.confirmPassword?.message}</label>

              <Button
                type="submit"
                backgroundColor={"#1B85F3"}
                width={"480px"}
                borderRadius={"10px"}
                border={"Black"}
                color={"white"}
                height={"54px"}
                marginTop={"30px"}
              >
                Submit
              </Button>
              <br></br>
              <br></br>
              <Box marginLeft={"210px"}>
                <a className=" lg-reset" href="/sign-in">
                  Login
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
export default Reset;
