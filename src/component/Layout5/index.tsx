import { Box, Text, Image } from "@chakra-ui/react";

export const Layout5 = () => {
  return (
    <>
      <Box bg={"white"}>
        <Box display={"block"} textAlign={"center"} justifyContent={"center"}>
          <Text
            textStyle={{ xl: "5xl", base: "2xl" }}
            fontWeight={"semibold"}
            paddingTop={{ xl: "40px", base: "20px" }}
          >
            Caring is the new marketing
          </Text>
          <Text
            width={{ xl: "628px" }}
            // textAlign={"center"}
            marginTop={"20px"}
            marginRight={"auto"}
            marginLeft={"auto"}
            // marginLeft={"420px"}
            color={"#717171"}
            justifyContent={"space-between"}
          >
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ xl: "row", base: "column" }}
          padding={{ xl: "40px", base: "10px" }}
          justifyContent={"space-around"}
       
        >
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box
              marginLeft={{ xl: "25px", base: "" }}
              zIndex={5}
              width={{ xl: "400px", base: "250px" }}
              marginTop={{xl:"1px",base:"20px"}}
            >
              <Image src="src/image/image 18.png"></Image>
            </Box>
            <Box
              zIndex={10}
              boxShadow={"md"}
              marginTop={"-96px"}
              borderRadius={"10px"}
              // display={"flex"}
              bg={"#F5F7FA"}
              width={{ xl: "317px", base: "200px" }}
              height={{ xl: "176px", base: "150px" }}
              // flexDirection={{base:"column"}}
            >
              <Text
                color={"#717171"}
                textAlign={"center"}
                paddingTop={"16px"}
                justifyContent={"center"}
                fontSize={{ xl: "20px", base: "16px" }}
                fontWeight={"600"}
              >
                Creating Streamlined Safeguarding Processes with OneRen
              </Text>
              <Box padding={"15px"} justifyContent={"center"} display={"flex"}>
                <Text
                  fontSize={{ xl: "20px", base: "16px" }}
                  fontWeight={"600"}
                  color={"#4CAF4F"}
                >
                  Read more
                </Text>
                <Image
                  marginTop={"10px"}
                  marginLeft={"10px"}
                  width={"22px"}
                  height={"15px"}
                  src={"src/image/vector/24/Arrows & Directions/Vector.png"}
                ></Image>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box
              zIndex={5}
              marginLeft={{ xl: "25px", base: "" }}
              width={{ xl: "400px", base: "250px" }}
              marginTop={{xl:"1px",base:"20px"}}
            >
              <Image src="src/image/image 19.png"></Image>
            </Box>
            <Box
              zIndex={10}
              boxShadow={"md"}
              marginTop={"-96px"}
              borderRadius={"10px"}
              bg={"#F5F7FA"}
              width={{ xl: "317px", base: "200px" }}
              height={{ xl: "176px", base: "150px" }}
            >
              <Text
                display={{ base: "flex" }}
                justifyContent={{ base: "center" }}
                color={"#717171"}
                textAlign={"center"}
                paddingTop={"16px"}
                fontSize={{ xl: "20px", base: "16px" }}
                fontWeight={"600"}
              >
                Creating Streamlined Safeguarding Processes with OneRen
              </Text>
              <Box padding={"15px"} justifyContent={"center"} display={"flex"}>
                <Text
                  fontSize={{ xl: "20px", base: "16px" }}
                  fontWeight={"600"}
                  color={"#4CAF4F"}
                >
                  Read more
                </Text>
                <Image
                  marginTop={"10px"}
                  marginLeft={"10px"}
                  width={"22px"}
                  height={"15px"}
                  src={"src/image/vector/24/Arrows & Directions/Vector.png"}
                ></Image>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box
              // marginLeft={{ base: "20px" }}
              zIndex={5}
              marginTop={{xl:"1px",base:"20px"}}
              width={{ xl: "400px", base: "250px" }}
            >
              <Image src="src/image/image 20.png"></Image>
            </Box>
            <Box
              zIndex={10}
              boxShadow={"md"}
              marginTop={"-96px"}
              borderRadius={"10px"}
              bg={"#F5F7FA"}
              width={{ xl: "317px", base: "200px" }}
              height={{ xl: "176px", base: "150px" }}
            >
              <Text
                color={"#717171"}
                textAlign={"center"}
                paddingTop={"16px"}
                justifyContent={"center"}
                fontSize={{ xl: "20px", base: "16px" }}
                fontWeight={"600"}
              >
                Creating Streamlined Safeguarding Processes with OneRen
              </Text>
              <Box padding={"15px"} justifyContent={"center"} display={"flex"}>
                <Text
                  fontSize={{ xl: "20px", base: "16px" }}
                  fontWeight={"600"}
                  color={"#4CAF4F"}
                >
                  Read more
                </Text>
                <Image
                  marginTop={"10px"}
                  marginLeft={"10px"}
                  width={"22px"}
                  height={"15px"}
                  src={"src/image/vector/24/Arrows & Directions/Vector.png"}
                ></Image>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Layout5;
