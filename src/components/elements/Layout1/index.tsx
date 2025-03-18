import { Box, Text, Image, Button } from "@chakra-ui/react";

export const Layout1 = () => {
  return (
    <>
      <Box>
        <Box>
          <Box bg={"white"}>
            <Text
              textAlign={"center"}
              textStyle={{ xl: "5xl", base: "2xl" }}
              color={"#4D4D4D"}
              fontWeight={"semibold"}
              paddingTop={"40px"}
            >
              Our Clients
            </Text>

            <Text marginTop={"10px"} textAlign={"center"} color={"#717171"}>
              We have been working with some Fortune 500+ clients
            </Text>
          </Box>
          <Box
            display={"flex"}
            paddingTop={{ xl: "55px", base: "30px" }}
            justifyContent={"space-evenly"}
            bg={"white"}
          >
            <Image src="src/assets/1.png"></Image>
            <Image src="src/assets/2.png"></Image>
            <Image src="src/assets/3.png"></Image>
            <Image src="src/assets/4.png"></Image>
            <Image src="src/assets/5.png"></Image>
            <Image src="src/assets/6.png"></Image>
            <Image src="src/assets/7.png"></Image>
          </Box>
        </Box>
        <Box bg={"white"} justifyContent={"center"}>
          <Box
            paddingTop={{ xl: "55px", base: "20px" }}
            textAlign={"center"}
            bg={"white"}
          >
            <Text
              textAlign={"center"}
              textStyle={{ xl: "5xl", base: "2xl" }}
              color={"#4D4D4D"}
              fontWeight={"semibold"}
              paddingTop={{ xl: "15px", base: "20px" }}
            >
              Manage your entire community <br></br>in a single system
            </Text>
            <Text marginTop={"20px"} color={"#717171"}>
              Who is Nextcent suitable for?
            </Text>
          </Box>
          <Box
            display={{ xl: "flex" }}
            justifyContent={{ xl: "space-around", base: "space-between" }}
            bg={"white"}
            // paddingTop={"16px"}
            // pb={"50px"}
          >
            <Box
              // display={""}
              marginLeft={{ base: "20px" }}
              width={{ xl: "300px" }}
              height={{ base: "200px" }}
            >
              <Box justifyItems={"center"}>
                <Image src="src/assets/ii.png"></Image>
              </Box>
              <Box>
                <Text
                  textAlign={"center"}
                  textStyle={{ xl: "4xl", base: "xl" }}
                  color={"#4D4D4D"}
                  fontWeight={"bold"}
                  paddingTop={"10px"}
                >
                  Membership Organisations
                </Text>
                <Text
                  textAlign={"center"}
                  paddingTop={"10px"}
                  color={"#717171"}
                >
                  Our membership management software provides full automation of
                  membership renewals and payments
                </Text>
              </Box>
            </Box>
            <Box
              marginLeft={{ base: "20px" }}
              width={{ xl: "300px" }}
              height={{ base: "200px" }}
            >
              <Box justifyItems={"center"}>
                <Image src="src/assets/home.png"></Image>
              </Box>
              <Text
                textAlign={"center"}
                textStyle={{ xl: "4xl", base: "xl" }}
                color={"#4D4D4D"}
                fontWeight={"bold"}
                paddingTop={"10px"}
              >
                National Associations
              </Text>
              <Text textAlign={"center"} paddingTop={"10px"} color={"#717171"}>
                Our membership management software provides full automation of
                membership renewals and payments
              </Text>
            </Box>
            <Box
              marginLeft={{ base: "20px" }}
              width={{ xl: "300px" }}
              height={{ base: "200px" }}
            >
              <Box justifyItems={"center"}>
                <Image src="src/assets/hand.png"></Image>
              </Box>
              <Text
                textAlign={"center"}
                textStyle={{ xl: "4xl", base: "xl" }}
                color={"#4D4D4D"}
                fontWeight={"bold"}
              >
                Clubs And
                <br></br>Groups
              </Text>
              <Text textAlign={"center"} paddingTop={"10px"} color={"#717171"}>
                Our membership management software provides full automation of
                membership renewals and payments
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          paddingTop={{ xl: "100px", base: "30px" }}
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
              src="src/assets/lock/mobile-login/pana.png"
            ></Image>
          </Box>
          <Box
            justifyContent={"center"}
            width={{ xl: "661px" }}
            height={{ xl: "268px" }}
            marginLeft={{ xl: "160px", base: "5px" }}
            paddingTop={{ xl: "20px", base: "30px" }}
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
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </Text>
            <Button marginTop={"26px"} bg={"#4CAF4F"}>
              Learn more
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Layout1;
