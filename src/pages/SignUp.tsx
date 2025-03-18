import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import "../index.css";
import { Checkbox } from "../components/ui/checkbox";
import { Box, Button, Image, Text, Input } from "@chakra-ui/react";
// import Button from "../components/elements/Button";
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
        margin="auto"
        maxW={"1440px"}
        display={{ xl: "flex", base: "block" }}
      >
        <Box
          width={"720px"}
          padding={"30px"}
          display={{ xl: "flex", base: "none" }}
          bg={{ base: "#F7FAFC" }}
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
              marginLeft={{ base: "24px" }}
              marginRight={"40px"}
              marginBottom={{ base: "16px" }}
              src="src/assets/logo"
            ></Image>
          </Box>
          <Box display={{ xl: "none", base: "flex" }} justifyContent={"center"}>
            <Image
              height={"240px"}
              width={"auto"}
              src="src/assets/placeholder_container.png"
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
            <Text
              marginTop={{ xl: "50px" }}
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
            <Box padding={{ base: "24px" }}>
              <Box width={"300px"} display={"flex"} marginTop={"42px"}>
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
                  <Box color={"red"} marginTop={"5px"}>
                    <label>{errors?.name?.message}</label>
                  </Box>
                </Box>
                <Box>
                  <Input
                    height={"54px"}
                    border={"2px solid #D1E6FF"}
                    borderRadius={"10px"}
                    placeholder="LastName"
                    marginLeft={"37px"}
                    value={formValue.lastName}
                    onChange={handleChangeLastName}
                  />
                  <br></br>
                  <Box color={"red"} marginTop={"5px"}>
                    <label>{errors?.lastName?.message}</label>
                  </Box>
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
                <Box color={"red"} marginTop={"5px"}>
                  <label>{errors?.email?.message}</label>
                  {/* <p className="text-error">Message</p> */}
                </Box>
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
                <Box color={"red"} marginTop={"5px"}>
                  <label>{errors?.phone?.message}</label>
                  {/* <p className="text-error">Message</p> */}
                </Box>
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
                <Box color={"red"} marginTop={"5px"}>
                  <label>{errors?.password?.message}</label>
                  {/* <p className="text-error">Message</p> */}
                </Box>
              </Box>

              <Box justifyContent={"center"}>
                <Button
                  backgroundColor={"#1B85F3"}
                  borderRadius={"8px"}
                  type="submit"
                  height={"50px"}
                  marginTop={"50px"}
                  padding={{ base: "24px" }}
                  w={"full"}
                >
                  Create my account
                </Button>
              </Box>
              <Box marginTop={{ base: "20px" }}>
                <Checkbox color={"grey"}>
                  I agree to Platform <a> Terms of Serivce</a> and{" "}
                  <a> Privacy Policy</a>
                </Checkbox>
              </Box>
            </Box>

            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <Box display={"flex"} justifyContent={"center "} marginTop={"20px"}>
              <Text>Joined us before ? </Text>
              <a href="/sign-in"> Login</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default SignUp;
