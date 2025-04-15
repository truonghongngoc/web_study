import { Box, Image, Text, Input, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box>
        <Box
          justifyContent={"space-between"}
          display={{ xl: "flex", base: "block" }}
          bg={"#263238"}
          marginTop={{ xl: "20px" }}
        >
          <Box padding={{ xl: "70px", base: "30px" }}>
            <Box color={" white"}>
              <Image
                width={{ xl: "200px", base: "100px" }}
                src="src/assets/nexcent.png"
              ></Image>
              <Text color={"#F5F7FA"} marginTop={"40px"}>
                Copyright © 2020 Nexcent ltd.
              </Text>
              <Text marginTop={"10px"}>All rights reserved</Text>
            </Box>
            <Box
              marginTop={"30px"}
              justifyContent={"space-between"}
              width={"200px"}
              display={"flex"}
            >
              <Image src="src/assets/social_icons_instagram.png"></Image>
              <Image src="src/assets/w/Footer/Big/Social Icons.png"></Image>
              <Image src="src/assets/social_icons_x.png"></Image>
              <Image src="src/assets/ytb/Social Icons.png"></Image>
            </Box>
          </Box>
          <Box
            marginLeft={{ xl: "200px", base: "10px" }}
            padding={{ xl: "60px", base: "20px" }}
            display={"flex"}
            flexDirection={{ xl: "row", base: "column" }}
          >
            <Box display={"flex"}>
              <Box display={"block"}>
                <Text
                  color={"white"}
                  fontWeight={"semibold"}
                  textStyle={{ xl: "xl", base: "md" }}
                >
                  Company
                </Text>
                <Link
                  justifyContent={"center"}
                  marginTop={"15px"}
                  color={"#F5F7FA"}
                  fontSize={"14px"}
                  href="#"
                >
                  About us
                </Link>
                <br></br>
                <Link
                  marginTop={"15px"}
                  color={"#F5F7FA"}
                  fontSize={"14px"}
                  href="#"
                >
                  Blog
                </Link>
                <br></br>
                <Link
                  marginTop={"15px"}
                  color={"#F5F7FA"}
                  fontSize={"14px"}
                  href="#"
                >
                  Contact us
                </Link>
                <br></br>
                <Link
                  marginTop={"15px"}
                  color={"#F5F7FA"}
                  fontSize={"14px"}
                  href="#"
                >
                  Pricing
                </Link>
                <br></br>
                <Link
                  marginTop={"15px"}
                  color={"#F5F7FA"}
                  fontSize={"14px"}
                  href="#"
                >
                  Testimonials
                </Link>
                <br></br>
              </Box>
              <Box
                color={"white"}
                justifyContent={"center"}
                marginLeft={{ xl: "100px", base: "50px" }}
              >
                <Text
                  color={"white"}
                  fontWeight={"semibold"}
                  width={{ base: "200px" }}
                  textStyle={{ xl: "xl", base: "md" }}
                >
                  Support
                </Text>
                <Link
                  marginTop={"15px"}
                  color={"#F5F7FA"}
                  fontSize={"14px"}
                  href="#"
                >
                  Help center
                </Link>
                <br></br>
                <Link
                  marginTop={"15px"}
                  color={"#F5F7FA"}
                  fontSize={"14px"}
                  href="#"
                >
                  Terms of service
                </Link>
                <br></br>
                <Link
                  marginTop={"15px"}
                  color={"#F5F7FA"}
                  fontSize={"14px"}
                  href="#"
                >
                  Legal
                </Link>
                <br></br>
                <Link
                  marginTop={"15px"}
                  color={"#F5F7FA"}
                  fontSize={"14px"}
                  href="#"
                >
                  Privacy policy
                </Link>
                <br></br>
                <Link
                  marginTop={"15px"}
                  color={"#F5F7FA"}
                  fontSize={"14px"}
                  href="#"
                >
                  Status
                </Link>
                <br></br>
              </Box>
            </Box>

            <Box
              justifyContent={{ base: "" }}
              marginTop={{ base: "20px" }}
              marginLeft={{ xl: "100px", base: "5px" }}
            >
              <Text color={"white"} fontWeight={"semibold"} textStyle={"xl"}>
                Stay up to date
              </Text>
              <Input
                width={{ xl: "200px", base: "200px" }}
                marginTop={{ base: "10px" }}
                border={"none"}
                bg={"#D9DBE1"}
                color={"white"}
                placeholder="your email dress"
              ></Input>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
