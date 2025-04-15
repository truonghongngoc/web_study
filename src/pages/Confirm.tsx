import { Box, Image, Text } from "@chakra-ui/react";
import "../index.css";

export function Confirm() {
  return (
    <Box bg={"#F7FAFC"} width={"100%"} height={"100vh"}

    >
      <Box
        display={"flex"}
        justifyContent={{ xl: "flex-end", base: "flex-start" }}
      >
        <Image
          display={"flex"}
          marginTop={{ xl: "40px", base: "16px" }}
          marginRight={{ base: "24px" }}
          src="src/assets/logo.png"
        ></Image>
      </Box>
      <Box
        marginLeft={"500px"}
        marginTop={"100px"}
        bg={"white"}
        width={"500px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        borderRadius={"10px"}
        height={"200px"}
      >
        <Text
    
          textAlign={"center"}
          textStyle={"xl"}
          fontFamily={"arial"}
          color={"black"}
        >
          Đã có một email xác nhận được gửi đến bạn. Vui lòng kiểm tra email !
        </Text>
        <br></br>
        <Box
        textAlign={"center"}
        color={"#1B85F3"}
        fontSize={"xl"}
   
        >
        <a  className="cf" href="/sign-in">
          Quay về màn hình đăng nhập{" "}
        </a>
        </Box>
      </Box>
    </Box>
  );
}

export default Confirm;
