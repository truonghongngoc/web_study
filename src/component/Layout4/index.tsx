import { Box, Image, Text } from "@chakra-ui/react";

export const Layout4 = () => {
  return (
    <>
      <Box
        display={"flex"}
        bg={"#F5F7FA"}
        paddingTop={{ xl: "52px", base: "30px" }}
        flexDirection={{ xl: "row", base: "column" }}
        justifyContent={"center"}
        // flexDirection={{base:"column"}}

        // marginTop={"0px"}
      >
        <Box justifyItems={"center"}>
          <Image
            // width={"336px"}
            // marginLeft={{xl:"100px",base:"30px"}}
            // height={"326px"}
            // justifyContent={"center"}
            src="src/image/image 9.png"
          ></Image>
        </Box>
        <Box
          width={{ xl: "800px" }}
          paddingLeft={{ xl: "150px", base: "30px" }}
        >
          <Text color={"#717171"} fontSize={"16px"}>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </Text>
          <Text marginTop={"15px"} color={"#4CAF4F"} fontWeight={"semibold"}>
            Tim Smith
          </Text>
          <Text color={"#717171"} marginTop={"10px"}>
            British Dragon Boat Racing Association
          </Text>

          <Box
            display={{ xl: "flex" }}
            //  flexDirection={"row-reverse"}
            marginTop={"15px"}
            justifyContent={{ xl: "space-between", base: "space-around" }}
            alignItems={"center"}
            //  display={{xl:"flex",base:"block"}}
          >
            <Box justifyContent={{ base: "space-around" }} display={"flex"}>
              <Image src="src/image/a1.png"></Image>
              <Image src="src/image/a2.png"></Image>
              <Image src="src/image/a3.png"></Image>
              <Image src="src/image/a4.png"></Image>
              <Image src="src/image/a5.png"></Image>
              <Image src="src/image/a6.png"></Image>
            </Box>

            <Box
              display={"flex"}
              // justifyContent={"center"}
            >
              <Text
                paddingTop={"10px"}
                color={"#4CAF4F"}
                fontWeight={"semibold"}
              >
                Meet all customers
              </Text>
              <Image
                marginTop={"20px"}
                marginLeft={"10px"}
                width={"14px"}
                height={"8px"}
                src="src/image/vector/24/Arrows & Directions/Vector.png"
              ></Image>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Layout4;
