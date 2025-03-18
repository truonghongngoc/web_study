import { Box, Image, Button, Text } from "@chakra-ui/react";

export const Layout3 = () => {
  return (
    <>
      <Box
        paddingTop={{ xl: "52px", base: "30px" }}
        display={"flex"}
        flexDirection={{ xl: "row", base: "column" }}
        // justifyContent={"space-between"}
        bg={"white"}
        // height={"333px"}
        paddingLeft={{ xl: "100px", base: "30px" }}
      >
        <Box justifyItems={"center"}>
          <Image
            width={"400px"}
            // marginLeft={{ xl: "170px" }}
            // height={{ xl: "300px", base: "200px" }}
            src="src/image/lock/mobile-login/pana.png"
          ></Image>
        </Box>
        <Box
          justifyContent={"center"}
          width={{xl:"661px"}}
          height={{xl:"268px"}}

          marginLeft={{ xl: "160px", base: "5px" }}
          paddingTop={{ xl: "10px", base: "30px" }}
        >
          <Text
            // textAlign={{ base: "center" }}

            textStyle={{ xl: "4xl", base: "xl" }}
            fontWeight={"semibold"}
            color={"#4D4D4D"}
          >
            How to design your site footer like we did
          </Text>
          <Text color={"#4D4D4D"} fontSize={"16px"} marginTop={"26px"}>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </Text>
          <Button marginTop={"26px"} bg={"#4CAF4F"}>
            Learn more
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Layout3;
